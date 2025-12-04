import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zefqxjiifrjswzlplnua.supabase.co';
const supabaseKey = 'sb_publishable_lMDT-yFoLeA2-UBgAYTpiQ_UedIVsB-';

let supabaseInstance = null;

try {
  if (supabaseUrl && supabaseKey) {
    // Check for standard JWT format (starts with 'ey') to help debugging
    if (!supabaseKey.startsWith('ey') && !supabaseKey.startsWith('sb-')) {
       console.warn('⚠️ WARNING: The provided Supabase Key does not look like a standard JWT (usually starts with "ey"). Check your Project Settings > API in the Supabase Dashboard.');
    }

    // We attempt to initialize the client.
    // The try/catch block ensures that if the key format is rejected by the library,
    // the app continues to load (falling back to static data) instead of crashing.
    supabaseInstance = createClient(supabaseUrl, supabaseKey);
    console.log("Supabase client initialized for project: zefqxjiifrjswzlplnua");
  }
} catch (error) {
  console.warn("Supabase client initialization failed. The app will use static data.", error);
}

export const supabase = supabaseInstance;