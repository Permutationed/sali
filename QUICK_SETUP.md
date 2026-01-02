# Quick Setup Guide

## Fix "Failed to Load Goals" Error

If you're seeing "Failed to Load Goals", you need to configure your Supabase credentials.

### Step 1: Get Your Supabase Credentials

1. Go to [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Select your project (or create a new one)
3. Click **Settings** (gear icon) → **API**
4. Copy these two values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (long string starting with `eyJ...`)

### Step 2: Update Configuration

1. Open the file: `/js/config.js`
2. Replace the placeholder values:

```javascript
const SUPABASE_CONFIG = {
  url: 'https://YOUR-PROJECT-ID.supabase.co',  // Paste your Project URL here
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',  // Paste your anon key here
};
```

### Step 3: Verify Your Database

Make sure you have a `goals` table in your Supabase database with at least these columns:
- `id` (primary key)
- `title` or `name`
- `description` or `details` (optional)
- `status` (optional)
- `current_progress` or `progress` or `current` (optional)
- `target` or `target_value` (optional)
- `created_at` (optional)

### Step 4: Test

1. Refresh the page: `http://localhost:3000/goals.html`
2. You should now see your goals loading!

## Still Having Issues?

- Check the browser console (F12) for detailed error messages
- Verify your Supabase URL and key are correct (no extra spaces)
- Make sure your `goals` table exists and has data
- Check that Row Level Security (RLS) allows public read access if needed
