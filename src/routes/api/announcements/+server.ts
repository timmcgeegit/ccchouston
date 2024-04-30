// ccchouston/src/routes/api/announcements/+server.ts
import fs from 'fs/promises';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const filePath = 'src/content/announcements/announcements.json';

export const GET: RequestHandler = async ({ url }) => {
  const id = url.searchParams.get('id');
  if (id) {
    const data = await fs.readFile(filePath, 'utf-8');
    const announcements = JSON.parse(data);
    const announcement = announcements.find((a) => a.id === parseInt(id));
    if (announcement) {
      return json(announcement);
    } else {
      return json({ message: 'Announcement not found' }, { status: 404 });
    }
  } else {
    const data = await fs.readFile(filePath, 'utf-8');
    const announcements = JSON.parse(data);
    return json(announcements);
  }
};

export const POST: RequestHandler = async ({ request }) => {
  const announcement = await request.json();
  const data = await fs.readFile(filePath, 'utf-8');
  const announcements = JSON.parse(data);
  const newAnnouncement = { ...announcement, id: announcements.length + 1 };
  announcements.push(newAnnouncement);
  await fs.writeFile(filePath, JSON.stringify(announcements, null, 2));
  return json(newAnnouncement);
};

export const PUT: RequestHandler = async ({ request }) => {
  const updatedAnnouncement = await request.json();
  const data = await fs.readFile(filePath, 'utf-8');
  const announcements = JSON.parse(data);
  const index = announcements.findIndex((a) => a.id === updatedAnnouncement.id);
  if (index !== -1) {
    announcements[index] = { ...announcements[index], ...updatedAnnouncement };
    await fs.writeFile(filePath, JSON.stringify(announcements, null, 2));
    return json(updatedAnnouncement, { status: 200 });
  } else {
    return json({ message: 'Announcement not found' }, { status: 404 });
  }
};

export const DELETE: RequestHandler = async ({ request }) => {
  const { id } = await request.json();
  const data = await fs.readFile(filePath, 'utf-8');
  const announcements = JSON.parse(data);
  const updatedAnnouncements = announcements.filter((a) => a.id !== id);
  await fs.writeFile(filePath, JSON.stringify(updatedAnnouncements, null, 2));
  return json({ message: 'Announcement deleted' });
};