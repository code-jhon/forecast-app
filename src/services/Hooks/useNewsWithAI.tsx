import { useState, useCallback } from 'react';
import { NewsArticle, getMockCityNews } from '../API/news';
import { getMockNewsSummary } from '../API/openai';

export interface NewsWithSummary extends NewsArticle {
  aiSummary?: string;
  sentiment?: 'positive' | 'neutral' | 'negative';
  keywords?: string[];
  summaryLoading?: boolean;
  summaryError?: string;
}

interface UseNewsWithAIReturn {
  news: NewsWithSummary[];
  loading: boolean;
  error: string | null;
  fetchNews: (city: string) => Promise<void>;
  refreshNews: () => Promise<void>;
  summarizeArticle: (articleId: string) => Promise<void>;
}

export const useNewsWithAI = (): UseNewsWithAIReturn => {
  const [news, setNews] = useState<NewsWithSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentCity, setCurrentCity] = useState<string>('');

  const fetchNews = useCallback(async (city: string) => {
    if (!city.trim()) {
      setError('Please provide a city name');
      return;
    }

    setLoading(true);
    setError(null);
    setCurrentCity(city);

    try {
      const response = await getMockCityNews(city);

      if (response.error) {
        setError(response.error);
        setNews([]);
      } else {
        const newsWithSummary: NewsWithSummary[] = response.articles.map(article => ({
          ...article,
          summaryLoading: false
        }));
        setNews(newsWithSummary);
        
        // Auto-summarize the first 3 articles
        setTimeout(() => {
          newsWithSummary.slice(0, 3).forEach((article, index) => {
            setTimeout(() => {
              summarizeArticle(article.id);
            }, index * 1000); // Stagger the AI calls
          });
        }, 500);
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
      setNews([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshNews = useCallback(async () => {
    if (currentCity) {
      await fetchNews(currentCity);
    }
  }, [currentCity, fetchNews]);

  const summarizeArticle = useCallback(async (articleId: string) => {
    setNews(prevNews => 
      prevNews.map(article => 
        article.id === articleId 
          ? { ...article, summaryLoading: true, summaryError: undefined }
          : article
      )
    );

    try {
      const article = news.find(a => a.id === articleId);
      if (!article) return;

      const summary = await getMockNewsSummary({ 
        article, 
        city: currentCity 
      });

      setNews(prevNews => 
        prevNews.map(a => 
          a.id === articleId 
            ? { 
                ...a, 
                aiSummary: summary.summary,
                sentiment: summary.sentiment,
                keywords: summary.keywords,
                summaryLoading: false,
                summaryError: summary.error
              }
            : a
        )
      );
    } catch (err: any) {
      setNews(prevNews => 
        prevNews.map(article => 
          article.id === articleId 
            ? { 
                ...article, 
                summaryLoading: false,
                summaryError: err.message || 'Failed to generate summary'
              }
            : article
        )
      );
    }
  }, [news, currentCity]);

  return {
    news,
    loading,
    error,
    fetchNews,
    refreshNews,
    summarizeArticle
  };
};