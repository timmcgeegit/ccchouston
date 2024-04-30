// ccchouston/src/routes/announcements
import { supabase } from "$lib/supabaseClient";

export async function load() {
    const { data, error } = await supabase.from('announcements').select('*');
    console.log('Retrieved data:', data);
    return {
      announcements: data ?? [],
    };
  }



