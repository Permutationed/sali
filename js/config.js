// Supabase Configuration
// IMPORTANT: Replace these with your actual Supabase project credentials
// Get them from: https://supabase.com/dashboard → Your Project → Settings → API

const SUPABASE_CONFIG = {
  url: 'https://your-project-id.supabase.co',  // Replace with your Supabase URL
  anonKey: 'your-anon-key-here',                // Replace with your anon/public key
};

// Validate configuration
function validateConfig() {
  if (!SUPABASE_CONFIG.url || SUPABASE_CONFIG.url.includes('your-project-id')) {
    console.error('❌ Supabase URL not configured!');
    return false;
  }
  if (!SUPABASE_CONFIG.anonKey || SUPABASE_CONFIG.anonKey.includes('your-anon-key')) {
    console.error('❌ Supabase anon key not configured!');
    return false;
  }
  return true;
}

// Get Supabase client (call this after supabase library is loaded)
function getSupabaseClient() {
  if (typeof supabase === 'undefined') {
    console.error('❌ Supabase library not loaded! Make sure the CDN script is included.');
    return null;
  }
  
  if (!validateConfig()) {
    return null;
  }
  
  return supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
}
