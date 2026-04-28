import type { PageServerLoad } from './$types';
import { getPartnersByRegion } from '$lib/data/ministry-partners';

export const load: PageServerLoad = async () => {
	return { localPartners: getPartnersByRegion('local') };
};
