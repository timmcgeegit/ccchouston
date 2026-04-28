import type { PageServerLoad } from './$types';
import { getActiveBlocks } from '$lib/data/schedule-blocks';

export const load: PageServerLoad = async () => {
	return { blocks: getActiveBlocks('prayer-room') };
};
