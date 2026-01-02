# Goals Feature Setup

This guide explains how to set up the goals feature that allows goals to be viewable online via shareable links.

## Features

- **Goals Listing Page** (`/goals.html`) - Browse all goals from the database
- **Individual Goal Pages** (`/{id}` or `/goal.html?id={id}`) - View detailed information about each goal
- **Shareable Links** - Each goal has a unique URL that can be shared

## Setup Instructions

### 1. Configure Supabase

1. Get your Supabase credentials:
   - Go to [Supabase Dashboard](https://supabase.com/dashboard)
   - Select your project
   - Go to **Settings** → **API**
   - Copy your **Project URL** and **anon/public key**

2. Update Supabase configuration in these files:
   - `goal.html` - Find the script section and update:
     ```javascript
     const SUPABASE_URL = 'https://your-project-id.supabase.co';
     const SUPABASE_ANON_KEY = 'your-anon-key-here';
     ```
   
   - `goals.html` - Same configuration in the script section

### 2. Database Setup

Make sure your Supabase database has a `goals` table with at least these columns:

```sql
CREATE TABLE goals (
  id BIGSERIAL PRIMARY KEY,
  title TEXT,
  description TEXT,
  status TEXT, -- 'active', 'completed', 'in_progress', etc.
  current_progress INTEGER DEFAULT 0,
  target INTEGER DEFAULT 100,
  icon TEXT, -- emoji or icon identifier
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Note:** The code is flexible and will work with different column names:
- `title` or `name` for goal title
- `description` or `details` for goal description
- `current_progress`, `progress`, or `current` for current value
- `target` or `target_value` for target value
- `icon` or `emoji` for goal icon

### 3. Run the Server

For the `/{id}` URL format to work, you need to run the Express server:

```bash
# Install dependencies
npm install

# Start the server
npm start
```

The server will run on `http://localhost:3000` by default.

**Alternative:** If you're using a static hosting service (like Vercel, Netlify), you'll need to configure URL rewriting in their settings to redirect `/{id}` to `/goal.html?id={id}`.

### 4. Access Your Goals

- **All Goals**: `http://localhost:3000/goals.html`
- **Individual Goal**: `http://localhost:3000/{goal_id}` or `http://localhost:3000/goal.html?id={goal_id}`

## URL Formats Supported

1. **Query Parameter**: `/goal.html?id=123`
2. **Path Parameter**: `/123` (requires server.js or URL rewriting)

## Customization

### Styling
All pages use Tailwind CSS and match the Achieva design system. Colors and styling can be adjusted in the `<script id="tailwind-config">` section.

### Data Fields
To add more fields to display, edit the `displayGoal()` function in `goal.html` and add corresponding HTML elements.

## Troubleshooting

- **Goals not loading**: Check your Supabase URL and anon key are correct
- **404 errors on /{id}**: Make sure the server is running or configure URL rewriting
- **Database errors**: Verify your `goals` table exists and has the correct structure
