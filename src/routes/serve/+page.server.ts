import type { PageServerLoad } from './$types';
import { announcementsByCategory } from '$lib/sample-data';

export const load: PageServerLoad = async () => {
	return { featuredAnnouncements: announcementsByCategory('serve') };
};
