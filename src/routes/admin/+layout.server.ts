// src/routes/admin/+layout.server.ts

import { redirect } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export async function load({ request, locals }) {
  const session = await supabase.auth.getSession();

  if (!session.user) {
    throw redirect(302, '/login');
  }

  locals.user = session.user;

  return {
    user: session.user
  };
}