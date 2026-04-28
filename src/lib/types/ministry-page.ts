// Content shape for the ministry page template.
// This shape is the parent of the future Zod schema in Phase 3 (CMS integration).
// When the CMS lands, the schema validates this same structure and the template
// renders straight from `data.pageContent` — no template rewrite required.

export type Image = { url: string; altText: string };

export type CTA = { label: string; href: string };

export type OffsetDirection = 'tl' | 'tr' | 'bl' | 'br';

export type ProgramItem = {
	id: string;
	label: string;
	/** HTML string. Rendered with {@html}. Will be Tipex output post-CMS. */
	body: string;
};

export type MinistryPageContent = {
	hero: {
		title: string;
		subtitle?: string;
	};
	bannerImage: Image;
	intro?: {
		title: string;
		/** HTML string. */
		body: string;
	};
	feature?: {
		title: string;
		image: Image;
		direction?: OffsetDirection;
		/** HTML string. */
		body: string;
		cta?: CTA;
	};
	programs?: {
		title: string;
		/** Plain string, single paragraph above the accordion. */
		intro?: string;
		items: ProgramItem[];
	};
	/**
	 * Section header for the announcements grid. The actual list comes in via the
	 * `announcements` prop on MinistryPage (loaded by +page.server.ts). When this
	 * field is undefined OR the loaded list is empty, the entire section hides.
	 */
	announcements?: {
		title: string;
		intro?: string;
	};
};
