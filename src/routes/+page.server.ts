// src/routes/+page.server.js
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import announcements from '../content/announcements/announcements.json';

export const load: PageServerLoad = async () => {
  if (!announcements) {
    throw error(404, 'Announcements not found');
  }

  const featuredAnnouncements = announcements.filter(announcement => announcement.featured);

  return { featuredAnnouncements };
};