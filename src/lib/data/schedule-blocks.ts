// Schedule block sample data + helpers. v1 use: prayer room hours.

import type { DayOfWeek, ScheduleBlock } from '$lib/types/schedule-block';

export const samplePrayerRoomBlocks: ScheduleBlock[] = [
	{
		id: 'sched-001',
		parent_type: 'prayer_room',
		parent_id: 'prayer-room',
		day_of_week: 1,
		starts_at_time: '09:00',
		ends_at_time: '19:00',
		label: 'Open prayer',
		active: true
	},
	{
		id: 'sched-002',
		parent_type: 'prayer_room',
		parent_id: 'prayer-room',
		day_of_week: 2,
		starts_at_time: '11:00',
		ends_at_time: '13:00',
		label: 'Open prayer',
		active: true
	},
	{
		id: 'sched-003',
		parent_type: 'prayer_room',
		parent_id: 'prayer-room',
		day_of_week: 4,
		starts_at_time: '06:00',
		ends_at_time: '12:00',
		label: 'Worship-led prayer (early morning)',
		active: true
	},
	{
		id: 'sched-004',
		parent_type: 'prayer_room',
		parent_id: 'prayer-room',
		day_of_week: 0,
		starts_at_time: '08:00',
		ends_at_time: '12:00',
		label: 'Pre-service prayer team',
		active: true
	}
];

function byDay(a: ScheduleBlock, b: ScheduleBlock): number {
	if (a.day_of_week !== b.day_of_week) return a.day_of_week - b.day_of_week;
	return a.starts_at_time.localeCompare(b.starts_at_time);
}

export function getActiveBlocks(
	parentId: string,
	all: ScheduleBlock[] = samplePrayerRoomBlocks
): ScheduleBlock[] {
	return all.filter((b) => b.active && b.parent_id === parentId).sort(byDay);
}

/** Group active blocks by day-of-week for grid rendering. Empty days are absent. */
export function groupBlocksByDay(blocks: ScheduleBlock[]): Map<DayOfWeek, ScheduleBlock[]> {
	const map = new Map<DayOfWeek, ScheduleBlock[]>();
	for (const block of blocks) {
		const list = map.get(block.day_of_week) ?? [];
		list.push(block);
		map.set(block.day_of_week, list);
	}
	return map;
}

/** "09:00" → "9 AM", "13:30" → "1:30 PM". */
export function formatTime(time: string): string {
	const [hStr, mStr] = time.split(':');
	const h = Number(hStr);
	const m = Number(mStr);
	const period = h >= 12 ? 'PM' : 'AM';
	const display = h === 0 ? 12 : h > 12 ? h - 12 : h;
	return m === 0 ? `${display} ${period}` : `${display}:${String(m).padStart(2, '0')} ${period}`;
}
