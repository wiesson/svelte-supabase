import { createClient } from '@supabase/supabase-js';

const { VITE_SUPABASE_URL, VITE_SUPABASE_PUBLIC_KEY } = import.meta.env as {
	[key: string]: string;
};

const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_PUBLIC_KEY);

export default supabase;
