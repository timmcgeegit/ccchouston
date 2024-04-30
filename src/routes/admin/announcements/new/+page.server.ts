// ccchouston/src/routes/admin/announcements/create/+page.server.ts
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { announcementSchema } from '$lib/schemas/announcement';
import { supabase } from '$lib/supabaseClient';

export const load = async () => {
  const form = await superValidate(zod(announcementSchema));
  return { form };
};

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const form = await superValidate(formData, zod(announcementSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    const { data, error: supabaseError } = await supabase
      .from('announcements')
      .insert(form.data)
      .single();

    if (supabaseError) {
      console.error('Error creating announcement:', supabaseError);
      throw error(500, 'Failed to create announcement');
    }

    console.log('Announcement created successfully');
    // Redirect the user to the announcements page after successful creation
    throw redirect(303, '/admin');
  },
};