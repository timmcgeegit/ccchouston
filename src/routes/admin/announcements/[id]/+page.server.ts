// ccchouston/src/routes/admin/announcements/[id]/+page.server.ts
import { error, fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { announcementSchema } from '$lib/schemas/announcement';
import { supabase } from '$lib/supabaseClient';

export const load = async ({ params }) => {
  const id = parseInt(params.id);
  const { data, error: supabaseError } = await supabase
    .from('announcements')
    .select('*')
    .eq('id', id)
    .single();

  if (supabaseError) {
    throw error(404, 'Announcement not found');
  }

  const form = await superValidate(data, zod(announcementSchema));
  console.log('Form data in load:', form);
  return { form };
};

export const actions = {
  default: async ({ request, params }) => {
    const formData = await request.formData();
    const form = await superValidate(formData, zod(announcementSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    const { id } = params;
    console.log('URL params:', params);
    console.log('Form data:', form.data);

    console.log('Before Supabase update');
    const { error: supabaseError } = await supabase
      .from('announcements')
      .update(form.data)
      .eq('id', id);

    if (supabaseError) {
      console.error('Error updating announcement:', supabaseError);
      throw error(500, 'Failed to update announcement');
    }

    console.log('Announcement updated successfully');

    // Redirect the user to the announcements page after successful update
    throw redirect(303, '/admin');
  },
};