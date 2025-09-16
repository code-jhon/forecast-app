import axios from 'axios';
import { NewsArticle } from './news';

interface OpenAIRequest {
  city: string;
  prompt?: string;
}

interface OpenAIResponse {
  data: string;
  error?: string;
}

interface NewsSummaryRequest {
  article: NewsArticle;
  city: string;
}

interface NewsSummaryResponse {
  summary: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  keywords: string[];
  error?: string;
}

export const getCityInformation = async ({ city, prompt }: OpenAIRequest): Promise<OpenAIResponse> => {
  try {
    const defaultPrompt = `Tell me interesting facts, cultural highlights, and key attractions about ${city}. Include information about local cuisine, history, and what makes this city unique. Keep it concise but informative.`;
    
    const finalPrompt = prompt || defaultPrompt;

    // This is a placeholder for the actual OpenAI API call
    // You'll need to implement the actual API integration based on your backend setup
    const response = await axios.post('/api/openai/city-info', {
      prompt: finalPrompt,
      city: city
    });

    return {
      data: response.data.content || response.data.message
    };
  } catch (error: any) {
    console.error('Error fetching city information:', error);
    return {
      data: '',
      error: error.response?.data?.message || 'Failed to fetch city information'
    };
  }
};

export const summarizeNewsArticle = async ({ article, city }: NewsSummaryRequest): Promise<NewsSummaryResponse> => {
  try {
    const prompt = `Summarize this news article about ${city} in 2-3 sentences. Also analyze the sentiment (positive, neutral, negative) and extract 3 key keywords. 

Article: "${article.title} - ${article.description}"

Format your response as JSON: {"summary": "...", "sentiment": "...", "keywords": ["...", "...", "..."]}`;

    // This would be your actual OpenAI API call
    const response = await axios.post('/api/openai/summarize', {
      prompt: prompt,
      article: article
    });

    return response.data;
  } catch (error: any) {
    console.error('Error summarizing article:', error);
    return {
      summary: article.description,
      sentiment: 'neutral',
      keywords: [],
      error: error.response?.data?.message || 'Failed to summarize article'
    };
  }
};

// Mock function for development/testing
export const getMockNewsSummary = async ({ article, city }: NewsSummaryRequest): Promise<NewsSummaryResponse> => {
  // Simulate AI processing delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const summaries: { [key: string]: NewsSummaryResponse } = {
    'transportation': {
      summary: `${city} is taking bold steps toward sustainability with this transportation initiative. The 40% emissions reduction target demonstrates strong environmental commitment. This could serve as a model for other cities worldwide.`,
      sentiment: 'positive',
      keywords: ['sustainability', 'transportation', 'emissions']
    },
    'restaurant': {
      summary: `Local culinary excellence puts ${city} on the international food map. The innovative approach to traditional cuisine showcases the city's rich cultural heritage. This recognition will likely boost tourism and local pride.`,
      sentiment: 'positive',
      keywords: ['culinary', 'award', 'innovation']
    },
    'startup': {
      summary: `${city}'s tech ecosystem continues to thrive with this significant funding round. The $50M investment signals strong investor confidence in local innovation. This success story will attract more startups to the city.`,
      sentiment: 'positive',
      keywords: ['startup', 'funding', 'technology']
    },
    'climate': {
      summary: `${city} positions itself as a global leader in climate action by hosting this important summit. World leaders gathering here highlights the city's international significance. The focus on urban sustainability addresses critical global challenges.`,
      sentiment: 'positive',
      keywords: ['climate', 'summit', 'sustainability']
    },
    'festival': {
      summary: `${city} celebrates its multicultural identity through this new cultural festival. The event strengthens community bonds and promotes cultural understanding. This initiative showcases the city's commitment to diversity and inclusion.`,
      sentiment: 'positive',
      keywords: ['culture', 'diversity', 'festival']
    }
  };
  
  // Simple keyword matching to determine which summary to use
  const title = article.title.toLowerCase();
  let summaryKey = 'transportation'; // default
  
  if (title.includes('restaurant') || title.includes('culinary') || title.includes('food')) {
    summaryKey = 'restaurant';
  } else if (title.includes('startup') || title.includes('tech') || title.includes('funding')) {
    summaryKey = 'startup';
  } else if (title.includes('climate') || title.includes('summit')) {
    summaryKey = 'climate';
  } else if (title.includes('festival') || title.includes('cultural') || title.includes('heritage')) {
    summaryKey = 'festival';
  }
  
  return summaries[summaryKey];
};

// Mock function for development/testing
export const getMockCityInformation = async ({ city }: OpenAIRequest): Promise<OpenAIResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const mockResponses: { [key: string]: string } = {
    'london': '🇬🇧 London is a vibrant metropolis with over 2,000 years of history. Key attractions include the Tower of London, Buckingham Palace, and the British Museum. The city is famous for its afternoon tea culture, fish and chips, and diverse culinary scene. London is also known for its red double-decker buses, black cabs, and extensive underground system.',
    'paris': '🇫🇷 Paris, the City of Light, is renowned for its art, fashion, and cuisine. Must-see landmarks include the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. The city is famous for its café culture, croissants, macarons, and world-class wines. Paris is considered the fashion capital of the world.',
    'tokyo': '🇯🇵 Tokyo is a fascinating blend of ultra-modern and traditional culture. Experience everything from ancient temples to cutting-edge technology. The city is famous for its sushi, ramen, and unique vending machine culture. Tokyo offers incredible shopping in districts like Shibuya and Harajuku.',
    'new york': '🇺🇸 New York City, the Big Apple, never sleeps. Home to iconic landmarks like the Statue of Liberty, Empire State Building, and Central Park. The city is known for its pizza, bagels, and diverse food scene reflecting its multicultural population. Broadway shows and world-class museums make it a cultural hub.',
    'default': `🌍 ${city} is a unique destination with its own special character and attractions. This vibrant city offers visitors a chance to experience local culture, cuisine, and hospitality. Each location has its own story to tell and memorable experiences to offer.`
  };
  
  const cityKey = city.toLowerCase();
  const response = mockResponses[cityKey] || mockResponses['default'].replace('${city}', city);
  
  return {
    data: response
  };
};