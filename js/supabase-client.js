// Supabase Client Configuration for Browser
// Replace these with your actual Supabase project credentials

const SUPABASE_URL = 'https://your-project-id.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key-here';

// Initialize Supabase client (using CDN version)
let supabaseClient = null;

// Initialize Supabase when the library loads
if (typeof supabase !== 'undefined') {
  supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Function to get a goal by ID
async function getGoalById(id) {
  if (!supabaseClient) {
    console.error('Supabase client not initialized');
    return null;
  }
  
  try {
    const { data, error } = await supabaseClient
      .from('goals')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching goal:', error);
    return null;
  }
}

// Function to get all goals
async function getAllGoals() {
  if (!supabaseClient) {
    console.error('Supabase client not initialized');
    return [];
  }
  
  try {
    const { data, error } = await supabaseClient
      .from('goals')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching goals:', error);
    return [];
  }
}
