// ScheduleBlock content shape — mirrors architecture-spec.md §5.
// For recurring weekly schedules (e.g., prayer room hours, Kids Club hours).

export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export const DAY_LABELS: Record<DayOfWeek, string> = {
	0: 'Sunday',
	1: 'Monday',
	2: 'Tuesday',
	3: 'Wednesday',
	4: 'Thursday',
	5: 'Friday',
	6: 'Saturday'
};

export type ScheduleBlock = {
	id: string;
	parent_type: 'prayer_room' | 'kids_club' | 'ministry' | 'custom';
	parent_id: string;
	day_of_week: DayOfWeek;
	/** "09:00" — 24-hour format, leading-zero pad. */
	starts_at_time: string;
	ends_at_time: string;
	/** Optional context, e.g., "Open prayer", "Worship-led prayer". */
	label: string | null;
	active: boolean;
};
