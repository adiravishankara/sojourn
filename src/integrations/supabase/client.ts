import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://eovzkexmzabamkbaeonk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvdnprZXhtemFiYW1rYmFlb25rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzNjAzOTYsImV4cCI6MjA1MDkzNjM5Nn0.w5Cc66UjlF5LVY1d2eEOCBIi7gL8iFBgWyJXNXiRi-c";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);