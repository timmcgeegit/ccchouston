// MinistryPartner content shape — mirrors architecture-spec.md §5.
// Used by /local-missions and the future /missions-partners directory.

export const PARTNER_CATEGORIES = [
	'prayer',
	'compassion',
	'disaster_relief',
	'church_planting',
	'evangelism',
	'other'
] as const;

export type PartnerCategory = (typeof PARTNER_CATEGORIES)[number];

export const PARTNER_REGIONS = ['local', 'national', 'global'] as const;

export type PartnerRegion = (typeof PARTNER_REGIONS)[number];

export type MinistryPartner = {
	id: string;
	name: string;
	category: PartnerCategory;
	region: PartnerRegion;
	description: string;
	external_url: string;
	logo_url: string | null;
	alt_text: string | null;
	sort_order: number;
};
