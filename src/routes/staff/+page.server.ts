import type { PageServerLoad } from './$types';
import { getActiveTeam } from '$lib/data/team';

export const load: PageServerLoad = async () => {
	return { teamMembers: getActiveTeam() };
};
