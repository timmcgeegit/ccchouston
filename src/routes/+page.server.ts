import type { PageServerLoad } from './$types';
import { featuredAnnouncements } from '$lib/sample-data';

export const load: PageServerLoad = async () => {
  return { featuredAnnouncements };
};
