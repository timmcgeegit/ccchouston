import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getBySlug, isPublished, getRecent } from '$lib/data/blog';

export const load: PageServerLoad = async ({ params }) => {
	const post = getBySlug(params.slug);
	if (!post || !isPublished(post)) {
		throw error(404, 'Post not found');
	}
	const related = getRecent(4)
		.filter((p) => p.id !== post.id)
		.slice(0, 3);
	return { post, related };
};
