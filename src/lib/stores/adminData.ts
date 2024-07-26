// src/lib/stores/adminData.ts
import { writable } from 'svelte/store';
import { supabase } from '$lib/supabaseClient';

export const announcements = writable([]);
export const sermons = writable([]);
export const blogPosts = writable([]);

export async function fetchAnnouncements() {
  const { data, error } = await supabase.from('announcements').select('*');
  if (error) {
    console.error('Error fetching announcements:', error);
  } else {
    announcements.set(data);
  }
}

export async function fetchSermons() {
  const { data, error } = await supabase.from('sermons').select('*');
  if (error) {
    console.error('Error fetching sermons:', error);
  } else {
    sermons.set(data);
  }
}

export async function fetchBlogPosts() {
  const { data, error } = await supabase.from('blog_posts').select('*');
  if (error) {
    console.error('Error fetching blog posts:', error);
  } else {
    blogPosts.set(data);
  }
}