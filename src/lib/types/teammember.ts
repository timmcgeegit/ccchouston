// TeamMember content shape — mirrors architecture-spec.md §5.
// Phase 3 Zod schema swap is a one-line route-loader change.

import type { MinistryKey } from '$lib/types/announcements';

export type TeamMember = {
	id: string;
	/** Used by future /staff/[slug] detail. Schema-supported in v1; no detail route yet. */
	slug: string;
	name: string;
	position: string;
	image: string;
	/** REQUIRED for accessibility. */
	alt_text: string;
	/** HTML string. Rendered in bio Dialog with {@html}. Tipex output post-CMS. */
	bio: string | null;
	/** "108", "212". Calvary uses extensions for direct staff contact. */
	phone_extension: string | null;
	email: string | null;
	/** Which ministries they're tied to. Drives membership in scoped staff views. */
	ministry_keys: MinistryKey[];
	/** Manual drag-and-drop reorder admin UX is Phase 3; for v1, manual integers. */
	sort_order: number;
	active: boolean;
	created_at: string;
};
