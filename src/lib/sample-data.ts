// Static sample data for design review. Replace with real DB-backed loaders later.
import type { Announcement } from '$lib/types/announcements';
import type { TeamMember } from '$lib/types/teammember';

const SQUARE = (seed: string) =>
  `https://images.unsplash.com/${seed}?q=80&w=1200&auto=format&fit=crop`;

export const sampleAnnouncements: Announcement[] = [
  {
    id: 1,
    created_at: '2025-08-01T00:00:00Z',
    title: 'Sunday Worship at 10 AM',
    img_square: SQUARE('photo-1520637836862-4d197d17c55a'),
    img_16x9: SQUARE('photo-1520637836862-4d197d17c55a'),
    description: 'Join us every Sunday for worship, teaching, and community.',
    featured: true,
    category: 'general',
    link: '/plan-visit',
  },
  {
    id: 2,
    created_at: '2025-08-05T00:00:00Z',
    title: 'Summer Bash Registration',
    img_square: SQUARE('photo-1503454537195-1dcabb73ffb9'),
    img_16x9: SQUARE('photo-1503454537195-1dcabb73ffb9'),
    description: 'Wednesdays in June and July, 5 to 6:30 PM. Games, dinner, and a Bible message.',
    featured: true,
    category: 'kids',
    link: '/kids',
  },
  {
    id: 3,
    created_at: '2025-08-08T00:00:00Z',
    title: 'Youth Night',
    img_square: SQUARE('photo-1529390079861-591de354faf5'),
    img_16x9: SQUARE('photo-1529390079861-591de354faf5'),
    description: 'Friday nights in the youth room. Worship, teaching, and small groups.',
    featured: true,
    category: 'youth',
    link: '/youth',
  },
  {
    id: 4,
    created_at: '2025-08-12T00:00:00Z',
    title: 'Discover Calvary Class',
    img_square: SQUARE('photo-1507692049790-de58290a4334'),
    img_16x9: SQUARE('photo-1507692049790-de58290a4334'),
    description: 'A six-week introduction to who we are, what we believe, and where we are going.',
    featured: true,
    category: 'adults',
    link: '/adults',
  },
  {
    id: 5,
    created_at: '2025-08-15T00:00:00Z',
    title: 'Journey Groups Launch',
    img_square: SQUARE('photo-1529070538774-1843cb3265df'),
    img_16x9: SQUARE('photo-1529070538774-1843cb3265df'),
    description: 'Small groups meet weekly across Houston. Find one near you.',
    featured: false,
    category: 'adults',
    link: '/adults',
  },
  {
    id: 6,
    created_at: '2025-08-18T00:00:00Z',
    title: 'Mission Trip Interest Meeting',
    img_square: SQUARE('photo-1488521787991-ed7bbaae773c'),
    img_16x9: SQUARE('photo-1488521787991-ed7bbaae773c'),
    description: 'Learn about upcoming short-term mission opportunities and how to prepare.',
    featured: false,
    category: 'missions',
    link: '/missions',
  },
  {
    id: 7,
    created_at: '2025-08-20T00:00:00Z',
    title: 'Hairgrove Elementary Volunteer Day',
    img_square: SQUARE('photo-1577896851231-70ef18881754'),
    img_16x9: SQUARE('photo-1577896851231-70ef18881754'),
    description: 'Join us in serving students and staff at our partner school.',
    featured: false,
    category: 'serve',
    link: '/serve',
  },
  {
    id: 8,
    created_at: '2025-08-22T00:00:00Z',
    title: 'Kids Club Wednesdays',
    img_square: SQUARE('photo-1576765608535-5f04d1e3f289'),
    img_16x9: SQUARE('photo-1576765608535-5f04d1e3f289'),
    description: '1st through 5th grade. Crafts, games, snacks, and character-building lessons.',
    featured: false,
    category: 'kids',
    link: '/kids',
  },
];

export const featuredAnnouncements = sampleAnnouncements.filter((a) => a.featured);

export function announcementsByCategory(category: string): Announcement[] {
  return sampleAnnouncements.filter((a) => a.category === category);
}

export const sampleTeamMembers: TeamMember[] = [
  {
    team_id: 1,
    team_name: 'Pastor John Williams',
    team_position: 'Senior Pastor',
    team_img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    team_bio:
      '<p>John has served Calvary for over twenty years. He is passionate about equipping the church to follow Jesus together.</p><p>He and his wife Sarah have three kids and one very enthusiastic dog.</p>',
    created_at: '2024-01-01T00:00:00Z',
  },
  {
    team_id: 2,
    team_name: 'Sarah Williams',
    team_position: 'Womens Ministry Director',
    team_img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
    team_bio:
      '<p>Sarah leads His Delight, our womens ministry, with a heart for discipleship and prayer.</p>',
    created_at: '2024-01-01T00:00:00Z',
  },
  {
    team_id: 3,
    team_name: 'Marcus Lee',
    team_position: 'Worship Pastor',
    team_img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    team_bio:
      '<p>Marcus leads our worship team and oversees Sunday gatherings. He came to Calvary in 2018 from a church plant in Austin.</p>',
    created_at: '2024-01-01T00:00:00Z',
  },
  {
    team_id: 4,
    team_name: 'Rachel Nguyen',
    team_position: 'Kids Ministry Director',
    team_img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    team_bio:
      '<p>Rachel oversees Calvary Kids from nursery through 5th grade. She believes kids belong in the life of the church, not on the sidelines.</p>',
    created_at: '2024-01-01T00:00:00Z',
  },
  {
    team_id: 5,
    team_name: 'David Carter',
    team_position: 'Youth Pastor',
    team_img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
    team_bio: '',
    created_at: '2024-01-01T00:00:00Z',
  },
  {
    team_id: 6,
    team_name: 'Angela Petry',
    team_position: 'Missions Coordinator',
    team_img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop',
    team_bio:
      '<p>Angela coordinates our local and global mission partnerships, including our work with Hairgrove Elementary and Somebody Cares Houston.</p>',
    created_at: '2024-01-01T00:00:00Z',
  },
  {
    team_id: 7,
    team_name: 'Daniel DeJesus',
    team_position: 'Outreach Pastor',
    team_img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    team_bio:
      '<p>Daniel leads our prison ministry and partners with reentry programs across Houston.</p>',
    created_at: '2024-01-01T00:00:00Z',
  },
  {
    team_id: 8,
    team_name: 'Gene Haub',
    team_position: 'Pastoral Care',
    team_img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=800&auto=format&fit=crop',
    team_bio: '',
    created_at: '2024-01-01T00:00:00Z',
  },
];
