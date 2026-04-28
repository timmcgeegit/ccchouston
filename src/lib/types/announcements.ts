// src/lib/types/announcements.ts
export type Announcement = {
	id: number;
	created_at: string;
	title: string;
	img_square: string;
	img_16x9: string;
	alt_text: string;
	optional_overlay_title?: string;
	description: string;
	featured: boolean;
	category: string;
	link: string;
};
