import { writable } from 'svelte/store';
import { supabase } from '$lib/supabaseClient';
import type { Announcement } from '$lib/types/announcements';

export const announcements = writable<Announcement[]>([]);

export async function fetchAnnouncements() {
  const { data, error } = await supabase.from('announcements').select('*');
  if (error) {
    console.error('Error fetching announcements:', error);
  } else {
    announcements.set(data as Announcement[]);
  }
}

export async function createAnnouncement(announcement: Omit<Announcement, 'id' | 'created_at'>) {
  const { data, error } = await supabase.from('announcements').insert(announcement);
  if (error) {
    console.error('Error creating announcement:', error);
  } else {
    announcements.update((items) => [...items, data[0] as Announcement]);
  }
}

export async function updateAnnouncement(id: number, updatedAnnouncement: Partial<Announcement>) {
  const { data, error } = await supabase
    .from('announcements')
    .update(updatedAnnouncement)
    .match({ id });
  if (error) {
    console.error('Error updating announcement:', error);
  } else {
    announcements.update((items) => items.map((item) => (item.id === id ? data[0] as Announcement : item)));
  }
}

export async function deleteAnnouncement(id: number) {
  const { data, error } = await supabase.from('announcements').delete().match({ id });
  if (error) {
    console.error('Error deleting announcement:', error);
  } else {
    announcements.update((items) => items.filter((item) => item.id !== id));
  }
}