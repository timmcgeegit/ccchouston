import type { PageServerLoad } from './$types';
import { sampleTeamMembers } from '$lib/sample-data';

export const load: PageServerLoad = async () => {
  return { teamMembers: sampleTeamMembers };
};
