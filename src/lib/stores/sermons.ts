import { writable } from 'svelte/store';
import { supabase } from '$lib/supabaseClient';

export const sermons = writable([]);

export async function fetchSermons() {
  const { data, error } = await supabase.from('sermons').select('*');
  if (error) {
    console.error('Error fetching sermons:', error);
  } else {
    sermons.set(data);
  }
}

export async function createSermon(sermon) {
  const { data, error } = await supabase.from('sermons').insert(sermon);
  if (error) {
    console.error('Error creating sermon:', error);
  } else {
    sermons.update((items) => [...items, data[0]]);
  }
}

export async function updateSermon(id, updatedSermon) {
  const { data, error } = await supabase
    .from('sermons')
    .update(updatedSermon)
    .match({ id });
  if (error) {
    console.error('Error updating sermon:', error);
  } else {
    sermons.update((items) => items.map((item) => (item.id === id ? data[0] : item)));
  }
}

export async function deleteSermon(id) {
  const { data, error } = await supabase.from('sermons').delete().match({ id });
  if (error) {
    console.error('Error deleting sermon:', error);
  } else {
    sermons.update((items) => items.filter((item) => item.id !== id));
  }
}