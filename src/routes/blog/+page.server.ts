import type { PageServerLoad } from './$types';
import { getPublished } from '$lib/data/blog';

export const load: PageServerLoad = async () => {
	return { posts: getPublished() };
};
