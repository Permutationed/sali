// Vercel Serverless Function to serve Supabase config
// Environment variables are automatically available from Vercel settings

export default function handler(req, res) {
  // Set CORS headers for client-side access
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Content-Type', 'application/json');

  // Return Supabase config from environment variables
  res.status(200).json({
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY
  });
}
