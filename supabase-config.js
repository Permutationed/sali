// Supabase Configuration
// Replace these values with your actual Supabase project credentials

export const supabaseConfig = {
  url: 'https://your-project-id.supabase.co',
  anonKey: 'your-anon-key-here',
  serviceRoleKey: 'your-service-role-key-here', // Keep this secret! Only use on backend
}

// For client-side usage (browser)
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  supabaseConfig.url,
  supabaseConfig.anonKey
)

// For server-side usage (Node.js/backend)
export const supabaseAdmin = createClient(
  supabaseConfig.url,
  supabaseConfig.serviceRoleKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

// Environment variables format (.env file):
// SUPABASE_URL=https://your-project-id.supabase.co
// SUPABASE_ANON_KEY=your-anon-key-here
// SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
