// Supabase Configuration - Loaded from server environment variables
let SUPABASE_CONFIG = {
  url: null,
  anonKey: null,
  loaded: false
};

// Fetch config from server
async function loadConfig() {
  if (SUPABASE_CONFIG.loaded) {
    return SUPABASE_CONFIG;
  }
  
  try {
    const response = await fetch('/api/config');
    if (!response.ok) {
      throw new Error('Failed to fetch config');
    }
    const config = await response.json();
    
    SUPABASE_CONFIG.url = config.supabaseUrl;
    SUPABASE_CONFIG.anonKey = config.supabaseAnonKey;
    SUPABASE_CONFIG.loaded = true;
    
    return SUPABASE_CONFIG;
  } catch (error) {
    console.error('❌ Failed to load config from server:', error);
    return null;
  }
}

// Validate configuration
function validateConfig() {
  if (!SUPABASE_CONFIG.url) {
    console.error('❌ Supabase URL not configured!');
    return false;
  }
  if (!SUPABASE_CONFIG.anonKey) {
    console.error('❌ Supabase anon key not configured!');
    return false;
  }
  return true;
}

// Get Supabase client (call this after loading config)
async function getSupabaseClient() {
  if (typeof supabase === 'undefined') {
    console.error('❌ Supabase library not loaded! Make sure the CDN script is included.');
    return null;
  }
  
  // Load config if not already loaded
  await loadConfig();
  
  if (!validateConfig()) {
    return null;
  }
  
  return supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
}
