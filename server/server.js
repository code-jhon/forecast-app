const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// OpenAI rate limiting (more restrictive for API costs)
const openaiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // limit each IP to 10 OpenAI requests per minute
  message: 'Too many OpenAI requests, please try again later.'
});

// Environment validation
const requiredEnvVars = ['OPENAI_API_KEY'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error('❌ Missing required environment variables:', missingEnvVars.join(', '));
  process.exit(1);
}

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Secure OpenAI endpoint
app.post('/api/city-info', openaiLimiter, async (req, res) => {
  try {
    const { location } = req.body;
    
    // Input validation
    if (!location || typeof location !== 'string' || location.trim().length === 0) {
      return res.status(400).json({ error: 'Location is required and must be a non-empty string' });
    }
    
    // Sanitize input
    const sanitizedLocation = location.trim().slice(0, 100); // Limit length
    
    const result = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Show short text about the following city ${sanitizedLocation}, highlight the best from the city, limit to 40 words`
        }
      ],
      temperature: 0.5,
      max_tokens: 60,
    });
    
    const response = result.choices[0].message.content || "No response received";
    res.json({ response });
    
  } catch (error) {
    console.error('OpenAI API error:', error);
    
    // Don't expose internal error details
    if (error.code === 'insufficient_quota') {
      res.status(429).json({ error: 'API quota exceeded. Please try again later.' });
    } else if (error.code === 'invalid_api_key') {
      res.status(401).json({ error: 'Authentication failed.' });
    } else {
      res.status(500).json({ error: 'Internal server error. Please try again later.' });
    }
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🔒 Security headers enabled`);
  console.log(`⚡ Rate limiting active`);
});