import { writable } from 'svelte/store';
import { supabase } from '$lib/supabaseClient';

export const blogPosts = writable([]);

export async function fetchBlogPosts() {
  const { data, error } = await supabase.from('blog_posts').select('*');
  if (error) {
    console.error('Error fetching blog posts:', error);
  } else {
    blogPosts.set(data);
  }
}

export async function createBlogPost(blogPost) {
  const { data, error } = await supabase.from('blog_posts').insert(blogPost);
  if (error) {
    console.error('Error creating blog post:', error);
  } else {
    blogPosts.update((items) => [...items, data[0]]);
  }
}

export async function updateBlogPost(id, updatedBlogPost) {
  const { data, error } = await supabase
    .from('blog_posts')
    .update(updatedBlogPost)
    .match({ id });
  if (error) {
    console.error('Error updating blog post:', error);
  } else {
    blogPosts.update((items) => items.map((item) => (item.id === id ? data[0] : item)));
  }
}

export async function deleteBlogPost(id) {
  const { data, error } = await supabase.from('blog_posts').delete().match({ id });
  if (error) {
    console.error('Error deleting blog post:', error);
  } else {
    blogPosts.update((items) => items.filter((item) => item.id !== id));
  }
}