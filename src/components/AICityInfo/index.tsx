import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHexagonNodes } from '@fortawesome/free-solid-svg-icons';
import { WeatherContext } from '../../services/Context/WeatherContext';
import { useNewsWithAI, NewsWithSummary } from '../../services/Hooks/useNewsWithAI';
import '../../styles/AICityInfo.scss';

const NewsCard: React.FC<{ 
  article: NewsWithSummary;
  onSummarize: (id: string) => void;
}> = ({ article, onSummarize }) => {
  const formatTimeAgo = (dateString: string) => {
    const now = new Date();
    const published = new Date(dateString);
    const diffInHours = Math.floor((now.getTime() - published.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours === 1) return '1 hour ago';
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return '1 day ago';
    return `${diffInDays} days ago`;
  };

  const getSentimentIcon = (sentiment?: string) => {
    switch (sentiment) {
      case 'positive': return '📈';
      case 'negative': return '📉';
      default: return '📊';
    }
  };

  const getSentimentColor = (sentiment?: string) => {
    switch (sentiment) {
      case 'positive': return '#4ECDC4';
      case 'negative': return '#FF6B6B';
      default: return '#FFE66D';
    }
  };

  return (
    <div className="news-card">
      <div className="news-main">
        {article.urlToImage && (
          <div className="news-thumbnail">
            <img 
              src={article.urlToImage} 
              alt={article.title}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}
        <div className="news-info">
          <div className="news-header">
            <h4 className="news-title">{article.title}</h4>
            <div className="news-meta">
              <span className="news-source">{article.source.name}</span>
              <span className="news-time">{formatTimeAgo(article.publishedAt)}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="news-content">
        <p className="news-description">{article.description}</p>
        
        {article.aiSummary && (
          <div className="ai-summary">
            <div className="summary-header">
              <div className="ai-summary-badge">
                <FontAwesomeIcon icon={faHexagonNodes} className="ai-icon" />
                <span className="summary-label">AI Summary</span>
              </div>
              {article.sentiment && (
                <div className="sentiment-badge">
                  <span 
                    className="sentiment-indicator"
                    style={{ color: getSentimentColor(article.sentiment) }}
                  >
                    {getSentimentIcon(article.sentiment)}
                  </span>
                  <span className="sentiment-text" style={{ color: getSentimentColor(article.sentiment) }}>
                    {article.sentiment.charAt(0).toUpperCase() + article.sentiment.slice(1)}
                  </span>
                </div>
              )}
            </div>
            <p className="summary-text">{article.aiSummary}</p>
            {article.keywords && article.keywords.length > 0 && (
              <div className="keywords">
                {article.keywords.map((keyword, index) => (
                  <span key={index} className="keyword-tag">
                    {keyword}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
        
        {article.summaryLoading && (
          <div className="summary-loading">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span>AI is analyzing...</span>
          </div>
        )}
        
        {!article.aiSummary && !article.summaryLoading && (
          <button 
            className="summarize-btn"
            onClick={() => onSummarize(article.id)}
          >
            <FontAwesomeIcon icon={faHexagonNodes} className="ai-icon" />
            Get AI Summary
          </button>
        )}
      </div>
    </div>
  );
};

const AICityInfo: React.FC = () => {
  const weatherContext = useContext(WeatherContext);
  const currentLocation = weatherContext?.location || 'London';
  
  const { news, loading, error, fetchNews, refreshNews, summarizeArticle } = useNewsWithAI();

  const cityName = currentLocation.split(',')[0].trim();

  useEffect(() => {
    fetchNews(cityName);
  }, [cityName, fetchNews]);

  return (
    <div className="ai-city-info-container">
      <div className="feature-card ai-module">
        <div className="ai-header">
          <div className="header-content">
            <h4>
              📰 <FontAwesomeIcon icon={faHexagonNodes} className="header-ai-icon" /> News Feed
            </h4>
            <p className="ai-subtitle">
              Latest news from <strong>{currentLocation}</strong> with AI insights
            </p>
          </div>
          <button 
            className="refresh-btn"
            onClick={refreshNews}
            disabled={loading}
          >
            <span className={`refresh-icon ${loading ? 'spinning' : ''}`}>🔄</span>
          </button>
        </div>
        
        <div className="ai-content">
          {loading && news.length === 0 && (
            <div className="loading-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <em>Fetching latest news...</em>
            </div>
          )}
          
          {error && (
            <div className="error-content">
              <span className="error-icon">⚠️</span>
              <p>{error}</p>
              <button onClick={() => fetchNews(cityName)} className="retry-btn">
                Try Again
              </button>
            </div>
          )}
          
          {news.length > 0 && (
            <div className="news-feed">
              {news.map((article) => (
                <NewsCard 
                  key={article.id}
                  article={article}
                  onSummarize={summarizeArticle}
                />
              ))}
            </div>
          )}
          
          {!loading && news.length === 0 && !error && (
            <div className="placeholder-content">
              <em>📰 No recent news found for {cityName}</em>
              <p>Try refreshing or check back later for the latest updates!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AICityInfo;