// Pure filter helpers for announcements. No I/O — operate on the array passed in
// (or default to sample data). When the CMS lands, route loaders fetch from DB
// and pass the result through these same helpers — no behavior change required.

import { sampleAnnouncements } from '$lib/sample-data';
import type { Announcement, MinistryKey } from '$lib/types/announcements';

/**
 * Active = within [starts_at, ends_at]. Null bounds mean unbounded on that side.
 * Editor-controlled `ends_at` is the auto-hide trigger.
 */
export function isActive(a: Announcement, now: Date = new Date()): boolean {
	const t = now.getTime();
	if (a.starts_at && t < new Date(a.starts_at).getTime()) return false;
	if (a.ends_at && t > new Date(a.ends_at).getTime()) return false;
	return true;
}

/** Sort by sort_order asc (nulls last) then created_at desc. */
function byOrder(a: Announcement, b: Announcement): number {
	const ao = a.sort_order;
	const bo = b.sort_order;
	if (ao !== null && bo !== null && ao !== bo) return ao - bo;
	if (ao !== null && bo === null) return -1;
	if (ao === null && bo !== null) return 1;
	return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
}

export function getActive(
	all: Announcement[] = sampleAnnouncements,
	now: Date = new Date()
): Announcement[] {
	return all.filter((a) => isActive(a, now)).sort(byOrder);
}

/** Active announcements scoped to a specific ministry page. */
export function getForMinistry(
	key: MinistryKey,
	all: Announcement[] = sampleAnnouncements,
	now: Date = new Date()
): Announcement[] {
	return getActive(all, now).filter(
		(a) => a.scope === 'ministry' && a.ministry_keys?.includes(key)
	);
}

/** Active site-scope announcements (homepage / global). */
export function getSiteWide(
	all: Announcement[] = sampleAnnouncements,
	now: Date = new Date()
): Announcement[] {
	return getActive(all, now).filter((a) => a.scope === 'site');
}

/**
 * Active urgent announcement targeted to a context.
 * - { scope: 'site' } → top urgent site-wide
 * - { scope: 'ministry', ministryKey } → top urgent for that ministry
 * Returns the highest-priority match (first by sort order) or null.
 */
export function getUrgent(
	target: { scope: 'site' } | { scope: 'ministry'; ministryKey: MinistryKey },
	all: Announcement[] = sampleAnnouncements,
	now: Date = new Date()
): Announcement | null {
	const pool =
		target.scope === 'site' ? getSiteWide(all, now) : getForMinistry(target.ministryKey, all, now);
	return pool.find((a) => a.priority === 'urgent') ?? null;
}

/** Active announcements flagged featured (homepage grid). */
export function getFeatured(
	all: Announcement[] = sampleAnnouncements,
	now: Date = new Date()
): Announcement[] {
	return getActive(all, now).filter((a) => a.featured);
}

/**
 * Active announcements eligible to render as a first-visit modal.
 * Returns sorted list; the modal component picks the first not-yet-dismissed one.
 */
export function getModalEligible(
	all: Announcement[] = sampleAnnouncements,
	now: Date = new Date()
): Announcement[] {
	return getActive(all, now).filter((a) => a.show_as_modal_on_first_visit === true);
}
