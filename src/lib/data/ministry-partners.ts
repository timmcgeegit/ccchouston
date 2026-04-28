// Ministry partner sample data + helpers. Used by /local-missions and the
// future /missions-partners directory.

import type { MinistryPartner, PartnerCategory, PartnerRegion } from '$lib/types/ministry-partner';

export const sampleMinistryPartners: MinistryPartner[] = [
	{
		id: 'partner-001',
		name: 'Hairgrove Elementary Partnership',
		category: 'compassion',
		region: 'local',
		description:
			'Sustained partnership with Hairgrove Elementary serving students, staff, and families through mentoring, volunteer days, school supply drives, and consistent encouragement. Built jointly with Copperfield Church.',
		external_url: 'https://www.cfisd.net/Hairgrove-Elementary',
		logo_url: null,
		alt_text: 'Hairgrove Elementary',
		sort_order: 1
	},
	{
		id: 'partner-002',
		name: 'Cypress Assistance Ministries',
		category: 'compassion',
		region: 'local',
		description:
			'Local food pantry, financial assistance, and family support for neighbors in northwest Houston. Calvary volunteers serve regularly.',
		external_url: 'https://www.cypressassistance.org/',
		logo_url: null,
		alt_text: 'Cypress Assistance Ministries',
		sort_order: 2
	},
	{
		id: 'partner-003',
		name: 'Cy-Fair Helping Hands',
		category: 'compassion',
		region: 'local',
		description:
			'Food, clothing, and emergency assistance for families in the Cy-Fair area. Calvary supports through volunteer hours and donation drives.',
		external_url: 'https://www.cyfairhelpinghands.org/',
		logo_url: null,
		alt_text: 'Cy-Fair Helping Hands',
		sort_order: 3
	},
	{
		id: 'partner-004',
		name: 'Somebody Cares Houston',
		category: 'evangelism',
		region: 'local',
		description:
			'Doug Stringer and team mobilizing the Houston church into evangelism, compassion, disaster response, and leadership development. A long-standing Calvary partnership.',
		external_url: 'https://somebodycares.org/',
		logo_url: null,
		alt_text: 'Somebody Cares Houston',
		sort_order: 4
	},
	{
		id: 'partner-005',
		name: 'CrossWalk Center',
		category: 'compassion',
		region: 'local',
		description:
			'Houston-based reentry discipleship for those leaving prison. Calvary supports CrossWalk through the outreach pastoral team.',
		external_url: 'https://crosswalkcenter.org/',
		logo_url: null,
		alt_text: 'CrossWalk Center',
		sort_order: 5
	},
	{
		id: 'partner-006',
		name: 'Greater Houston Prayer Council',
		category: 'prayer',
		region: 'local',
		description:
			'Christ-centered network uniting Houston churches in continuous, collaborative prayer for the city.',
		external_url: 'https://ghpc.us',
		logo_url: null,
		alt_text: 'Greater Houston Prayer Council',
		sort_order: 6
	},
	{
		id: 'partner-007',
		name: 'Houston Responds',
		category: 'disaster_relief',
		region: 'local',
		description:
			'Coordinated disaster response across Houston. Calvary plugs in for storm response, cleanup, and long-term recovery work.',
		external_url: 'https://www.houstonresponds.org/',
		logo_url: null,
		alt_text: 'Houston Responds',
		sort_order: 7
	}
];

function bySort(a: MinistryPartner, b: MinistryPartner): number {
	return a.sort_order - b.sort_order;
}

export function getAllPartners(all: MinistryPartner[] = sampleMinistryPartners): MinistryPartner[] {
	return [...all].sort(bySort);
}

export function getPartnersByRegion(
	region: PartnerRegion,
	all: MinistryPartner[] = sampleMinistryPartners
): MinistryPartner[] {
	return getAllPartners(all).filter((p) => p.region === region);
}

export function getPartnersByCategory(
	category: PartnerCategory,
	all: MinistryPartner[] = sampleMinistryPartners
): MinistryPartner[] {
	return getAllPartners(all).filter((p) => p.category === category);
}
