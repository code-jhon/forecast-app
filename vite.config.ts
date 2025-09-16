import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '')

  // Environment validation - only check for variables that are actually required
  const requiredEnvVars = ['VITE_WEATHER_API_KEY', 'VITE_GOOGLE_API_KEY'];
  const missingEnvVars = requiredEnvVars.filter(envVar => !env[envVar]);

  if (missingEnvVars.length > 0) {
    console.error('❌ Missing required environment variables:', missingEnvVars.join(', '));
    console.error('Please check your .env file and ensure all required variables are set.');
    process.exit(1);
  }

  // Security warning for API keys in frontend
  console.warn('⚠️  SECURITY IMPROVEMENT: OpenAI calls moved to backend service.');
  console.warn('   Weather and Google API keys are still exposed in frontend - consider backend proxy.');

  return {

    plugins: [react()],
    server: {
      // Add security headers for development server
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
      }
    },
    build: {
      // Security optimizations for production build
      rollupOptions: {
        output: {
          manualChunks: undefined // Removed OpenAI chunking since it's no longer a frontend dependency
        }
      }
    }
  }
})
