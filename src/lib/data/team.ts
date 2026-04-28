// Team member sample data + helpers. Pure functions: pass `all` for testability
// and Phase 3 DB swap. Same convention as the blog helpers.

import type { TeamMember } from '$lib/types/teammember';
import type { MinistryKey } from '$lib/types/announcements';

const HEADSHOT = (seed: string) =>
	`https://images.unsplash.com/${seed}?q=80&w=800&auto=format&fit=crop`;

export const sampleTeamMembers: TeamMember[] = [
	{
		id: 'team-001',
		slug: 'pastor-john-williams',
		name: 'Pastor John Williams',
		position: 'Senior Pastor',
		image: HEADSHOT('photo-1500648767791-00dcc994a43e'),
		alt_text: 'Pastor John Williams',
		bio: `<p>John has served Calvary for over twenty years. He is passionate about equipping the church to follow Jesus together.</p><p>He and his wife Sarah have three kids and one very enthusiastic dog.</p>`,
		phone_extension: '101',
		email: 'john@calvaryhouston.com',
		ministry_keys: [],
		sort_order: 1,
		active: true,
		created_at: '2024-01-01T00:00:00Z'
	},
	{
		id: 'team-002',
		slug: 'sarah-williams',
		name: 'Sarah Williams',
		position: 'Womens Ministry Director',
		image: HEADSHOT('photo-1494790108377-be9c29b29330'),
		alt_text: 'Sarah Williams',
		bio: `<p>Sarah leads His Delight, our womens ministry, with a heart for discipleship and prayer.</p>`,
		phone_extension: '102',
		email: 'sarah@calvaryhouston.com',
		ministry_keys: ['women'],
		sort_order: 2,
		active: true,
		created_at: '2024-01-01T00:00:00Z'
	},
	{
		id: 'team-003',
		slug: 'marcus-lee',
		name: 'Marcus Lee',
		position: 'Worship Pastor',
		image: HEADSHOT('photo-1507003211169-0a1dd7228f2d'),
		alt_text: 'Marcus Lee',
		bio: `<p>Marcus leads our worship team and oversees Sunday gatherings. He came to Calvary in 2018 from a church plant in Austin.</p>`,
		phone_extension: '103',
		email: 'marcus@calvaryhouston.com',
		ministry_keys: ['adults'],
		sort_order: 3,
		active: true,
		created_at: '2024-01-01T00:00:00Z'
	},
	{
		id: 'team-004',
		slug: 'rachel-nguyen',
		name: 'Rachel Nguyen',
		position: 'Kids Ministry Director',
		image: HEADSHOT('photo-1573496359142-b8d87734a5a2'),
		alt_text: 'Rachel Nguyen',
		bio: `<p>Rachel oversees Calvary Kids from nursery through 5th grade. She believes kids belong in the life of the church, not on the sidelines.</p>`,
		phone_extension: '104',
		email: 'rachel@calvaryhouston.com',
		ministry_keys: ['kids'],
		sort_order: 4,
		active: true,
		created_at: '2024-01-01T00:00:00Z'
	},
	{
		id: 'team-005',
		slug: 'david-carter',
		name: 'David Carter',
		position: 'Youth Pastor',
		image: HEADSHOT('photo-1472099645785-5658abf4ff4e'),
		alt_text: 'David Carter',
		bio: null,
		phone_extension: '105',
		email: 'david@calvaryhouston.com',
		ministry_keys: ['youth'],
		sort_order: 5,
		active: true,
		created_at: '2024-01-01T00:00:00Z'
	},
	{
		id: 'team-006',
		slug: 'angela-petry',
		name: 'Angela Petry',
		position: 'Missions Coordinator',
		image: HEADSHOT('photo-1438761681033-6461ffad8d80'),
		alt_text: 'Angela Petry',
		bio: `<p>Angela coordinates our local and global mission partnerships, including our work with Hairgrove Elementary and Somebody Cares Houston.</p>`,
		phone_extension: '106',
		email: 'angela@calvaryhouston.com',
		ministry_keys: ['missions', 'serve'],
		sort_order: 6,
		active: true,
		created_at: '2024-01-01T00:00:00Z'
	},
	{
		id: 'team-007',
		slug: 'daniel-dejesus',
		name: 'Daniel DeJesus',
		position: 'Outreach Pastor',
		image: HEADSHOT('photo-1519085360753-af0119f7cbe7'),
		alt_text: 'Daniel DeJesus',
		bio: `<p>Daniel leads our prison ministry and partners with reentry programs across Houston.</p>`,
		phone_extension: '107',
		email: 'daniel@calvaryhouston.com',
		ministry_keys: ['missions', 'serve'],
		sort_order: 7,
		active: true,
		created_at: '2024-01-01T00:00:00Z'
	},
	{
		id: 'team-008',
		slug: 'gene-haub',
		name: 'Gene Haub',
		position: 'Pastoral Care',
		image: HEADSHOT('photo-1463453091185-61582044d556'),
		alt_text: 'Gene Haub',
		bio: null,
		phone_extension: '108',
		email: 'gene@calvaryhouston.com',
		ministry_keys: ['adults', 'prayer'],
		sort_order: 8,
		active: true,
		created_at: '2024-01-01T00:00:00Z'
	}
];

function bySort(a: TeamMember, b: TeamMember): number {
	return a.sort_order - b.sort_order;
}

export function getActiveTeam(all: TeamMember[] = sampleTeamMembers): TeamMember[] {
	return all.filter((t) => t.active).sort(bySort);
}

export function getTeamBySlug(
	slug: string,
	all: TeamMember[] = sampleTeamMembers
): TeamMember | null {
	return all.find((t) => t.slug === slug) ?? null;
}

export function getTeamByMinistry(
	key: MinistryKey,
	all: TeamMember[] = sampleTeamMembers
): TeamMember[] {
	return getActiveTeam(all).filter((t) => t.ministry_keys.includes(key));
}
