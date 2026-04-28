import type { LayoutServerLoad } from './$types';
import { getModalEligible, getUrgent } from '$lib/data/announcements';

export const load: LayoutServerLoad = async () => {
	return {
		siteUrgent: getUrgent({ scope: 'site' }),
		modalCandidates: getModalEligible()
	};
};
