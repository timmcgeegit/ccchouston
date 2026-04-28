import type { PageServerLoad } from './$types';
import { getFeatured } from '$lib/data/announcements';

export const load: PageServerLoad = async () => {
	return {
		featuredAnnouncements: getFeatured()
	};
};
