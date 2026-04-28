// Content shape for the announcement content type.
// Mirrors architecture-spec.md §5. This is the parent of the future Phase 3 Zod schema.
// When the CMS lands, the schema validates this same structure and the components
// render straight from DB rows — no template rewrite required.

/**
 * Ministry keys correspond to ministry pages that can host scoped announcements.
 * Single source of truth. Keep in sync with the ministry routes.
 */
export const MINISTRY_KEYS = [
	'kids',
	'youth',
	'adults',
	'missions',
	'serve',
	'women',
	'men',
	'prayer'
] as const;

export type MinistryKey = (typeof MINISTRY_KEYS)[number];

/**
 * v1 category vocabulary. Likely to be revisited — kept short on purpose.
 * Doubles as the filter chip set on `/announcements`.
 */
export const ANNOUNCEMENT_CATEGORIES = [
	'church_wide',
	'adults',
	'children',
	'youth',
	'missions'
] as const;

export type AnnouncementCategory = (typeof ANNOUNCEMENT_CATEGORIES)[number];

export type AnnouncementScope = 'site' | 'ministry';
export type AnnouncementPriority = 'normal' | 'urgent';
export type AnnouncementLinkType = 'standalone' | 'blog_post' | 'event' | 'external';

export type Announcement = {
	id: string;
	title: string;
	description: string;
	img_square: string | null;
	img_16x9: string | null;
	/** REQUIRED for accessibility. Admin form must enforce. */
	alt_text: string;
	/** Visible title overlay for graphics-with-baked-in-text. When unset, title shows on hover only. */
	optional_overlay_title?: string;
	category: AnnouncementCategory;
	scope: AnnouncementScope;
	/** When scope === 'ministry', which ministry pages this announcement appears on. */
	ministry_keys?: MinistryKey[];
	/** Free-form cross-cutting topics (advent, easter, summer, back-to-school). */
	tags?: string[];
	priority: AnnouncementPriority;
	link_type: AnnouncementLinkType;
	/** URL or internal slug. */
	link_target: string;
	starts_at: string | null;
	/** Auto-hide once this passes. Null = no end. */
	ends_at: string | null;
	/** Manual sort within scope/category. Nulls sort last. */
	sort_order: number | null;
	/** Featured on the homepage announcements grid. */
	featured: boolean;
	/** Opt-in: shows as a first-visit modal alongside its normal placement. */
	show_as_modal_on_first_visit?: boolean;
	/**
	 * Editor-controlled cookie duration for the first-visit modal, in days.
	 * Null when show_as_modal_on_first_visit is false. Common values: 1, 7, 30, 365.
	 */
	modal_dismiss_days?: number | null;
	created_at: string;
	updated_at: string;
};
