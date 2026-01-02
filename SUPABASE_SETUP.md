# Supabase Backend Configuration

## Getting Your Credentials

1. Go to [https://supabase.com](https://supabase.com) and sign in
2. Select your project (or create a new one)
3. Go to **Settings** → **API**
4. Copy the following:
   - **Project URL** → `SUPABASE_URL`
   - **anon/public key** → `SUPABASE_ANON_KEY`
   - **service_role key** → `SUPABASE_SERVICE_ROLE_KEY` (keep this secret!)

## Environment Variables

Create a `.env` file in your project root:

```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Usage Examples

### Client-Side (Browser)
```javascript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

// Example: Fetch goals
const { data, error } = await supabase
  .from('goals')
  .select('*')
```

### Server-Side (Backend/API)
```javascript
import { createClient } from '@supabase/supabase-js'

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

// Example: Admin operations
const { data, error } = await supabaseAdmin
  .from('users')
  .select('*')
```

## Important Notes

- **Anon Key**: Safe to use in client-side code (browser)
- **Service Role Key**: NEVER expose this in client-side code! Only use on backend servers
- Add `.env` to your `.gitignore` file to keep credentials secret
