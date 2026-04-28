// BlogPost content shape — mirrors architecture-spec.md §5.
// Body is an HTML string (Tipex output post-CMS), consistent with
// MinistryPageContent rich-text fields. Phase 3 swap is a one-line
// route-loader change.

export const BLOG_CATEGORIES = ['ministry', 'events', 'testimonials'] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogPost = {
	id: string;
	slug: string;
	title: string;
	subtitle: string | null;
	/** HTML string. Rendered with {@html}. Will be Tipex output post-CMS. */
	body: string;
	category: BlogCategory;
	author: string;
	hero_image: string | null;
	/** REQUIRED for accessibility when hero_image is set. */
	alt_text: string;
	/** Null when draft. Active filtering uses `published_at !== null` and `published_at <= now`. */
	published_at: string | null;
	created_at: string;
	updated_at: string;
};
