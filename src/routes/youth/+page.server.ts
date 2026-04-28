import type { PageServerLoad } from './$types';
import { getForMinistry, getUrgent } from '$lib/data/announcements';

export const load: PageServerLoad = async () => {
	return {
		announcements: getForMinistry('youth'),
		urgent: getUrgent({ scope: 'ministry', ministryKey: 'youth' })
	};
};
