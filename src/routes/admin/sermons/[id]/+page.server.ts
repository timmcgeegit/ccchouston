// ccchouston/src/routes/admin/sermons/[id]/+page.server.ts
import { error, fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { sermonSchema } from '$lib/schemas/sermon'; // replace announcementSchema with sermonSchema
import { supabase } from '$lib/supabaseClient';

export const load = async ({ params }) => {
  const id = parseInt(params.id);
  const { data, error: supabaseError } = await supabase
    .from('sermons') // replace 'announcements' with 'sermons'
    .select('*')
    .eq('id', id)
    .single();

  if (supabaseError) {
    throw error(404, 'Sermon not found'); // replace 'Announcement' with 'Sermon'
  }

  const form = await superValidate(data, zod(sermonSchema)); // replace announcementSchema with sermonSchema
  console.log('Form data in load:', form);
  return { form };
};

export const actions = {
  default: async ({ request, params }) => {
    const formData = await request.formData();
    const form = await superValidate(formData, zod(sermonSchema)); // replace announcementSchema with sermonSchema

    if (!form.valid) {
      return fail(400, { form });
    }

    const { id } = params;
    console.log('URL params:', params);
    console.log('Form data:', form.data);

    console.log('Before Supabase update');
    const { error: supabaseError } = await supabase
      .from('sermons') // replace 'announcements' with 'sermons'
      .update(form.data)
      .eq('id', id);

    if (supabaseError) {
      console.error('Error updating sermon:', supabaseError); // replace 'announcement' with 'sermon'
      throw error(500, 'Failed to update sermon'); // replace 'announcement' with 'sermon'
    }

    console.log('Sermon updated successfully'); // replace 'Announcement' with 'Sermon'

    // Redirect the user to the sermons page after successful update
    throw redirect(303, '/admin');
  },
};