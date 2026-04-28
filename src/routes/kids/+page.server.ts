import type { PageServerLoad } from './$types';
import { getForMinistry, getUrgent } from '$lib/data/announcements';

export const load: PageServerLoad = async () => {
	return {
		announcements: getForMinistry('kids'),
		urgent: getUrgent({ scope: 'ministry', ministryKey: 'kids' })
	};
};
