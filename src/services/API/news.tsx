import axios from 'axios';

export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: {
    name: string;
  };
  urlToImage?: string;
}

interface NewsResponse {
  articles: NewsArticle[];
  totalResults: number;
  error?: string;
}

export const getCityNews = async (city: string): Promise<NewsResponse> => {
  try {
    // This would be your actual news API call (NewsAPI, etc.)
    const response = await axios.get('/api/news', {
      params: {
        q: `${city} news`,
        sortBy: 'publishedAt',
        pageSize: 10,
        language: 'en'
      }
    });

    return {
      articles: response.data.articles || [],
      totalResults: response.data.totalResults || 0
    };
  } catch (error: any) {
    console.error('Error fetching news:', error);
    return {
      articles: [],
      totalResults: 0,
      error: error.response?.data?.message || 'Failed to fetch news'
    };
  }
};

// Mock function for development/testing
export const getMockCityNews = async (city: string): Promise<NewsResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const mockArticles: NewsArticle[] = [
    {
      id: '1',
      title: `${city} announces new sustainable transportation initiative`,
      description: `The city of ${city} has unveiled plans for an ambitious sustainable transportation project that aims to reduce carbon emissions by 40% over the next decade.`,
      url: 'https://example.com/news/1',
      publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
      source: { name: 'City Times' },
      urlToImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: '2',
      title: `Local ${city} restaurant wins international culinary award`,
      description: `A beloved local restaurant in ${city} has been recognized with a prestigious international award for its innovative approach to traditional cuisine.`,
      url: 'https://example.com/news/2',
      publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
      source: { name: 'Food & Culture' },
      urlToImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: '3',
      title: `${city} tech startup raises $50M in Series B funding`,
      description: `A promising technology startup based in ${city} has successfully raised $50 million in Series B funding to expand their innovative platform globally.`,
      url: 'https://example.com/news/3',
      publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(), // 8 hours ago
      source: { name: 'Tech Daily' },
      urlToImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: '4',
      title: `${city} hosts international climate summit next month`,
      description: `World leaders and climate experts will gather in ${city} next month for a major international summit focused on urban sustainability and climate action.`,
      url: 'https://example.com/news/4',
      publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(), // 12 hours ago
      source: { name: 'Global News' },
      urlToImage: 'https://images.unsplash.com/photo-1569163139805-5bfd5218da97?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: '5',
      title: `New cultural festival celebrates ${city}'s diverse heritage`,
      description: `A new annual cultural festival launched in ${city} showcases the rich diversity and heritage of the city's multicultural communities.`,
      url: 'https://example.com/news/5',
      publishedAt: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(), // 18 hours ago
      source: { name: 'Culture Weekly' },
      urlToImage: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=300&h=200&fit=crop&crop=center'
    }
  ];

  return {
    articles: mockArticles,
    totalResults: mockArticles.length
  };
};