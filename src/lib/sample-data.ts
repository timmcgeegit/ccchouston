// Static sample data for design review. Replace with real DB-backed loaders later.
import type { Announcement } from '$lib/types/announcements';
import type { TeamMember } from '$lib/types/teammember';

const SQUARE = (seed: string) =>
	`https://images.unsplash.com/${seed}?q=80&w=1200&auto=format&fit=crop`;

export const sampleAnnouncements: Announcement[] = [
	{
		id: 'ann-001',
		title: 'Sunday Worship at 10 AM',
		description: 'Join us every Sunday for worship, teaching, and community.',
		img_square: SQUARE('photo-1520637836862-4d197d17c55a'),
		img_16x9: SQUARE('photo-1520637836862-4d197d17c55a'),
		alt_text: 'Calvary congregation gathered for Sunday worship',
		category: 'church_wide',
		scope: 'site',
		tags: [],
		priority: 'normal',
		link_type: 'standalone',
		link_target: '/plan-visit',
		starts_at: null,
		ends_at: null,
		sort_order: 1,
		featured: true,
		created_at: '2025-08-01T00:00:00Z',
		updated_at: '2025-08-01T00:00:00Z'
	},
	{
		id: 'ann-002',
		title: 'Summer Bash Registration',
		description: 'Wednesdays in June and July, 5 to 6:30 PM. Games, dinner, and a Bible message.',
		img_square: SQUARE('photo-1503454537195-1dcabb73ffb9'),
		img_16x9: SQUARE('photo-1503454537195-1dcabb73ffb9'),
		alt_text: 'Kids cheering at a summer outdoor event',
		optional_overlay_title: 'Summer Bash 2025',
		category: 'children',
		scope: 'ministry',
		ministry_keys: ['kids'],
		tags: ['summer'],
		priority: 'normal',
		link_type: 'blog_post',
		link_target: '/blog/summer-bash-2025',
		starts_at: '2025-05-15T00:00:00Z',
		ends_at: '2026-07-31T23:59:59Z',
		sort_order: 1,
		featured: true,
		created_at: '2025-08-05T00:00:00Z',
		updated_at: '2025-08-05T00:00:00Z'
	},
	{
		id: 'ann-003',
		title: 'Youth Night',
		description: 'Friday nights in the youth room. Worship, teaching, and small groups.',
		img_square: SQUARE('photo-1529390079861-591de354faf5'),
		img_16x9: SQUARE('photo-1529390079861-591de354faf5'),
		alt_text: 'Teens worshipping together with hands raised',
		category: 'youth',
		scope: 'ministry',
		ministry_keys: ['youth'],
		tags: [],
		priority: 'normal',
		link_type: 'standalone',
		link_target: '/youth',
		starts_at: null,
		ends_at: null,
		sort_order: 1,
		featured: true,
		created_at: '2025-08-08T00:00:00Z',
		updated_at: '2025-08-08T00:00:00Z'
	},
	{
		id: 'ann-004',
		title: 'Discover Calvary Class',
		description: 'A six-week introduction to who we are, what we believe, and where we are going.',
		img_square: SQUARE('photo-1507692049790-de58290a4334'),
		img_16x9: SQUARE('photo-1507692049790-de58290a4334'),
		alt_text: 'Open Bible and notebook on a wooden table',
		category: 'adults',
		scope: 'ministry',
		ministry_keys: ['adults'],
		tags: ['membership'],
		priority: 'normal',
		link_type: 'standalone',
		link_target: '/adults',
		starts_at: null,
		ends_at: null,
		sort_order: 1,
		featured: true,
		created_at: '2025-08-12T00:00:00Z',
		updated_at: '2025-08-12T00:00:00Z'
	},
	{
		id: 'ann-005',
		title: 'Journey Groups Launch',
		description: 'Small groups meet weekly across Houston. Find one near you.',
		img_square: SQUARE('photo-1529070538774-1843cb3265df'),
		img_16x9: SQUARE('photo-1529070538774-1843cb3265df'),
		alt_text: 'Small group sharing a meal around a table',
		optional_overlay_title: 'Journey Groups',
		category: 'adults',
		scope: 'ministry',
		ministry_keys: ['adults'],
		tags: [],
		priority: 'normal',
		link_type: 'standalone',
		link_target: '/adults',
		starts_at: null,
		ends_at: null,
		sort_order: 2,
		featured: false,
		created_at: '2025-08-15T00:00:00Z',
		updated_at: '2025-08-15T00:00:00Z'
	},
	{
		id: 'ann-006',
		title: 'Mission Trip Interest Meeting',
		description: 'Learn about upcoming short-term mission opportunities and how to prepare.',
		img_square: SQUARE('photo-1488521787991-ed7bbaae773c'),
		img_16x9: SQUARE('photo-1488521787991-ed7bbaae773c'),
		alt_text: 'Sunlit landscape with distant mountains',
		category: 'missions',
		scope: 'ministry',
		ministry_keys: ['missions'],
		tags: [],
		priority: 'normal',
		link_type: 'standalone',
		link_target: '/missions',
		starts_at: null,
		ends_at: null,
		sort_order: 1,
		featured: false,
		created_at: '2025-08-18T00:00:00Z',
		updated_at: '2025-08-18T00:00:00Z'
	},
	{
		id: 'ann-007',
		title: 'Hairgrove Elementary Volunteer Day',
		description: 'Join us in serving students and staff at our partner school.',
		img_square: SQUARE('photo-1577896851231-70ef18881754'),
		img_16x9: SQUARE('photo-1577896851231-70ef18881754'),
		alt_text: 'Volunteer reading a book with an elementary student',
		category: 'missions',
		scope: 'ministry',
		ministry_keys: ['serve', 'missions'],
		tags: ['local-missions'],
		priority: 'normal',
		link_type: 'standalone',
		link_target: '/serve',
		starts_at: null,
		ends_at: null,
		sort_order: 2,
		featured: false,
		created_at: '2025-08-20T00:00:00Z',
		updated_at: '2025-08-20T00:00:00Z'
	},
	{
		id: 'ann-008',
		title: 'Kids Club Wednesdays',
		description: '1st through 5th grade. Crafts, games, snacks, and character-building lessons.',
		img_square: SQUARE('photo-1576765608535-5f04d1e3f289'),
		img_16x9: SQUARE('photo-1576765608535-5f04d1e3f289'),
		alt_text: 'Kids playing tag in a church gym',
		category: 'children',
		scope: 'ministry',
		ministry_keys: ['kids'],
		tags: [],
		priority: 'normal',
		link_type: 'standalone',
		link_target: '/kids',
		starts_at: null,
		ends_at: null,
		sort_order: 2,
		featured: false,
		created_at: '2025-08-22T00:00:00Z',
		updated_at: '2025-08-22T00:00:00Z'
	},
	{
		id: 'ann-009',
		title: 'Sunday service canceled due to weather',
		description:
			'Sunday morning service is canceled. Stay home, stay safe. We will meet online at 10 AM. Watch on YouTube or Facebook.',
		img_square: null,
		img_16x9: null,
		alt_text: 'Severe weather notice',
		category: 'church_wide',
		scope: 'site',
		tags: ['weather'],
		priority: 'urgent',
		link_type: 'external',
		link_target: 'https://youtube.com/@calvaryhoustontx',
		starts_at: '2026-04-26T00:00:00Z',
		ends_at: '2026-05-05T23:59:59Z',
		sort_order: 0,
		featured: false,
		created_at: '2026-04-25T18:00:00Z',
		updated_at: '2026-04-25T18:00:00Z'
	},
	{
		id: 'ann-010',
		title: 'Welcome to Calvary',
		description:
			'New here? Plan your visit and grab a coffee on us when you arrive Sunday morning.',
		img_square: SQUARE('photo-1507692049790-de58290a4334'),
		img_16x9: SQUARE('photo-1507692049790-de58290a4334'),
		alt_text: 'Coffee mug on a Bible',
		category: 'church_wide',
		scope: 'site',
		tags: ['new-visitor'],
		priority: 'normal',
		link_type: 'standalone',
		link_target: '/plan-visit',
		starts_at: null,
		ends_at: null,
		sort_order: 2,
		featured: true,
		show_as_modal_on_first_visit: true,
		modal_dismiss_days: 30,
		created_at: '2026-03-01T00:00:00Z',
		updated_at: '2026-03-01T00:00:00Z'
	},
	{
		id: 'ann-011',
		title: 'Easter expired example',
		description: 'This announcement ended in the past and should auto-hide.',
		img_square: SQUARE('photo-1521967906867-14ec9d64bee8'),
		img_16x9: SQUARE('photo-1521967906867-14ec9d64bee8'),
		alt_text: 'Easter lily',
		category: 'church_wide',
		scope: 'site',
		tags: ['easter'],
		priority: 'normal',
		link_type: 'standalone',
		link_target: '/',
		starts_at: '2025-04-01T00:00:00Z',
		ends_at: '2025-04-22T23:59:59Z',
		sort_order: null,
		featured: false,
		created_at: '2025-03-15T00:00:00Z',
		updated_at: '2025-03-15T00:00:00Z'
	}
];

export const sampleTeamMembers: TeamMember[] = [
	{
		team_id: 1,
		team_name: 'Pastor John Williams',
		team_position: 'Senior Pastor',
		team_img:
			'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
		team_bio:
			'<p>John has served Calvary for over twenty years. He is passionate about equipping the church to follow Jesus together.</p><p>He and his wife Sarah have three kids and one very enthusiastic dog.</p>',
		created_at: '2024-01-01T00:00:00Z'
	},
	{
		team_id: 2,
		team_name: 'Sarah Williams',
		team_position: 'Womens Ministry Director',
		team_img:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
		team_bio:
			'<p>Sarah leads His Delight, our womens ministry, with a heart for discipleship and prayer.</p>',
		created_at: '2024-01-01T00:00:00Z'
	},
	{
		team_id: 3,
		team_name: 'Marcus Lee',
		team_position: 'Worship Pastor',
		team_img:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
		team_bio:
			'<p>Marcus leads our worship team and oversees Sunday gatherings. He came to Calvary in 2018 from a church plant in Austin.</p>',
		created_at: '2024-01-01T00:00:00Z'
	},
	{
		team_id: 4,
		team_name: 'Rachel Nguyen',
		team_position: 'Kids Ministry Director',
		team_img:
			'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
		team_bio:
			'<p>Rachel oversees Calvary Kids from nursery through 5th grade. She believes kids belong in the life of the church, not on the sidelines.</p>',
		created_at: '2024-01-01T00:00:00Z'
	},
	{
		team_id: 5,
		team_name: 'David Carter',
		team_position: 'Youth Pastor',
		team_img:
			'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
		team_bio: '',
		created_at: '2024-01-01T00:00:00Z'
	},
	{
		team_id: 6,
		team_name: 'Angela Petry',
		team_position: 'Missions Coordinator',
		team_img:
			'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop',
		team_bio:
			'<p>Angela coordinates our local and global mission partnerships, including our work with Hairgrove Elementary and Somebody Cares Houston.</p>',
		created_at: '2024-01-01T00:00:00Z'
	},
	{
		team_id: 7,
		team_name: 'Daniel DeJesus',
		team_position: 'Outreach Pastor',
		team_img:
			'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
		team_bio:
			'<p>Daniel leads our prison ministry and partners with reentry programs across Houston.</p>',
		created_at: '2024-01-01T00:00:00Z'
	},
	{
		team_id: 8,
		team_name: 'Gene Haub',
		team_position: 'Pastoral Care',
		team_img:
			'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=800&auto=format&fit=crop',
		team_bio: '',
		created_at: '2024-01-01T00:00:00Z'
	}
];
