import { sampleAnnouncements } from '$lib/sample-data';

export async function load() {
  return { announcements: sampleAnnouncements };
}
