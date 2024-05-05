// src/routes/kids/+page.server.js
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

export const load: PageServerLoad = async () => {
  const { data, error: supabaseError } = await supabase
    .from('announcements')
    .select('*')
    .eq('category', 'kids');

  if (supabaseError) {
    throw error(500, 'Failed to fetch featured announcements');
  }

  return { featuredAnnouncements: data ?? [] };
};

