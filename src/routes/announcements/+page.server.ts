import type { PageServerLoad } from './$types';
import { getActive } from '$lib/data/announcements';

export const load: PageServerLoad = async () => {
	return { announcements: getActive() };
};
