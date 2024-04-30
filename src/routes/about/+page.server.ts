// src/routes/about/+page.server.ts
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

export const load: PageServerLoad = async () => {
  const { data, error: supabaseError } = await supabase
    .from('team')
    .select('*')
    .order('team_id', { ascending: true });
    console.log('Fetched team data:', data);

  if (supabaseError) {
    throw error(500, 'Failed to fetch team members');
  }

  return {
    teamMembers: data ?? [],
  };
};