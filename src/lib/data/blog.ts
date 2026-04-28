// Sample blog data + filter helpers. Pure functions: pass `all` and `now`
// for testability and Phase 3 DB swap. Keeps the same convention as the
// announcement helpers — route loaders consume helpers, not raw data.

import type { BlogPost } from '$lib/types/blog';

const HERO = (seed: string) =>
	`https://images.unsplash.com/${seed}?q=80&w=2400&auto=format&fit=crop`;

export const sampleBlogPosts: BlogPost[] = [
	{
		id: 'post-001',
		slug: 'first-love-fast-2026-week-3',
		title: '2026 First-Love Fast Devotional, Week 3',
		subtitle: 'A devotional series read alongside the annual fast. Week three.',
		body: `<p>The fast is harder this week. The first burst of resolve has worn off. The schedule that was supposed to make space for prayer has filled back in with the things you cleared out.</p>
<p>This is where the work happens.</p>
<p>The Lord meets us in the long middle. Not in the dramatic beginning, not at the relieved end, but in the unglamorous middle where we keep showing up because we said we would. He sees that. He uses it.</p>
<h2 class="text-h3 mt-8 mb-3">Scripture for the week</h2>
<p>Hosea 2:14, "Therefore, behold, I will allure her, bring her into the wilderness, and speak tenderly to her."</p>
<p>The wilderness in scripture is rarely a place of punishment. It is a place of unmaking and remaking. God leads us out of distraction so He can speak.</p>
<h2 class="text-h3 mt-8 mb-3">A prayer to pray this week</h2>
<p><em>Father, I am tired. Meet me in this middle. Speak tenderly to me, even when I cannot tell whether I am hearing You. Make this wilderness a place where I learn You better. In Jesus' name. Amen.</em></p>`,
		category: 'ministry',
		author: 'Pastor Steve Meeks',
		hero_image: HERO('photo-1490730141103-6cac27aaab94'),
		alt_text: 'A worn Bible open to the prophets',
		published_at: '2026-01-18T08:00:00Z',
		created_at: '2026-01-18T08:00:00Z',
		updated_at: '2026-01-18T08:00:00Z'
	},
	{
		id: 'post-002',
		slug: 'first-love-fast-2026-week-2',
		title: '2026 First-Love Fast Devotional, Week 2',
		subtitle: 'Week two of the annual fast. The waiting begins.',
		body: `<p>Week two is when most people give up. The novelty is gone. The hunger pangs are now familiar. The text from the friend you would normally meet for lunch goes unanswered.</p>
<p>Stay.</p>
<p>This is the week the fast starts to do its work. Prayer that was scheduled becomes prayer that is hungry. The reading you had to force yourself into now reads you back. Your appetite is being repointed.</p>
<h2 class="text-h3 mt-8 mb-3">Scripture for the week</h2>
<p>Isaiah 58:6, "Is not this the fast that I choose: to loose the bonds of wickedness, to undo the straps of the yoke, to let the oppressed go free, and to break every yoke?"</p>
<p>God is not after your hunger. He is after your heart. The fast is the means; intimacy with Him and freedom for the oppressed are the end.</p>`,
		category: 'ministry',
		author: 'Pastor Steve Meeks',
		hero_image: HERO('photo-1507692049790-de58290a4334'),
		alt_text: 'Bible and journal on a wooden desk',
		published_at: '2026-01-13T08:00:00Z',
		created_at: '2026-01-13T08:00:00Z',
		updated_at: '2026-01-13T08:00:00Z'
	},
	{
		id: 'post-003',
		slug: 'first-love-fast-2026-week-1',
		title: '2026 First-Love Fast Devotional, Week 1',
		subtitle: 'Welcome to the 2026 First-Love Fast. Week one. Why we fast and how to start.',
		body: `<p>Welcome to the First-Love Fast.</p>
<p>If you are new to Calvary, this is something the church does together every January. We set aside time at the start of the year to pray, fast, and reorient our affections toward Jesus. Some people fast meals. Some fast media. Some fast both. The form is flexible. The intent is not.</p>
<h2 class="text-h3 mt-8 mb-3">Why "first-love"</h2>
<p>The name comes from Revelation 2, where Jesus speaks to the church at Ephesus. They were doctrinally sound. They were industrious. They were enduring hardship. And He said this:</p>
<blockquote class="border-primary my-4 border-l-4 pl-6 italic">"But I have this against you, that you have abandoned the love you had at first." (Revelation 2:4)</blockquote>
<p>Hard words. Easy to drift into. The First-Love Fast is one of the ways we ask God to return us to that early, hot affection.</p>
<h2 class="text-h3 mt-8 mb-3">How to start</h2>
<ul class="my-4 ml-5 list-outside list-disc space-y-2">
  <li>Pick a form of fasting you can actually sustain for three weeks. Better to fast modestly and finish than fast heroically and quit.</li>
  <li>Replace the time the fast clears with prayer and scripture. The fast is not the point. What you fill the cleared space with is.</li>
  <li>Tell one person. Accountability is light, not heavy.</li>
  <li>Show up to the Sunday gatherings during the fast. We will be praying together.</li>
</ul>
<p>See you Sunday.</p>`,
		category: 'ministry',
		author: 'Pastor Steve Meeks',
		hero_image: HERO('photo-1438232992991-995b7058bbb3'),
		alt_text: 'Sunlight through stained glass',
		published_at: '2026-01-05T08:00:00Z',
		created_at: '2026-01-05T08:00:00Z',
		updated_at: '2026-01-05T08:00:00Z'
	},
	{
		id: 'post-004',
		slug: 'summer-blast-2025-recap',
		title: 'Summer Blast 2025: A Recap',
		subtitle: 'Eight weeks, two hundred kids, and a lot of pizza.',
		body: `<p>Summer Blast wrapped last week. Eight weeks of Wednesday evenings. Games on the lawn. A short Bible message. Crafts that ranged from "delightful" to "we will be finding glitter for years." Dinner together.</p>
<p>About two hundred kids came through over the season, most of them more than once. About forty volunteers staffed it, most of them parents giving up their Wednesday nights so other people's kids could come.</p>
<p>That is the part worth saying out loud. A church does not run children's ministry on professional staff. It runs it on the people who show up. Thank you, volunteers.</p>
<p>Next year is being planned now. If you want to be part of leading or serving, the kids team would love to hear from you.</p>`,
		category: 'events',
		author: 'Rachel Nguyen',
		hero_image: HERO('photo-1503454537195-1dcabb73ffb9'),
		alt_text: 'Kids playing tag on a summer evening',
		published_at: '2025-08-08T08:00:00Z',
		created_at: '2025-08-08T08:00:00Z',
		updated_at: '2025-08-08T08:00:00Z'
	},
	{
		id: 'post-005',
		slug: 'hairgrove-back-to-school',
		title: 'Hairgrove Back-to-School Drive',
		subtitle: 'How the partnership with Hairgrove Elementary served fifty teachers this year.',
		body: `<p>Every August our partnership with Hairgrove Elementary kicks back into gear with a teacher appreciation push. Backpacks for kids whose families could not afford one. Classroom supply baskets for teachers who had been pulling out of their own pockets. Coffee and breakfast for the staff on the first morning.</p>
<p>This year we served fifty teachers and around two hundred kids. Forty volunteers from Calvary plus thirty from Copperfield Church, our partner in this work, made it happen.</p>
<p>Sustained partnership is harder than one-time charity. It also goes farther. Hairgrove staff know our names now. We know theirs. That changes what we can do together.</p>
<p>If you want to get involved, the easiest entry point is the next volunteer day. Watch for it on the announcements page or talk to Angela in the missions office.</p>`,
		category: 'events',
		author: 'Angela Petry',
		hero_image: HERO('photo-1577896851231-70ef18881754'),
		alt_text: 'A volunteer reading with an elementary student',
		published_at: '2025-08-22T08:00:00Z',
		created_at: '2025-08-22T08:00:00Z',
		updated_at: '2025-08-22T08:00:00Z'
	},
	{
		id: 'post-006',
		slug: 'maria-baptism-testimony',
		title: `Maria's Story: From Skeptic to Baptized`,
		subtitle: `A testimony from this year's Easter baptism service.`,
		body: `<p>Maria came to Calvary the first time on a Sunday in October because her sister-in-law dragged her. Her words, not ours.</p>
<p>"I came in convinced I was going to hate it. Christians had hurt me before. I was ready to be confirmed in what I already believed about church people."</p>
<p>That was five years ago.</p>
<p>This Easter, Maria was baptized. She gave her testimony in the service before going under. We are reprinting it here, with her permission, because it is the kind of story we want the church to tell.</p>
<blockquote class="border-primary my-4 border-l-4 pl-6 italic">"What I found at Calvary was not what I expected. The first thing was that nobody tried to fix me. People asked questions and listened to my answers. The second thing was that the Bible study I started attending was full of people who actually disagreed with each other and stayed friends. I had never seen that before. The third thing, the slow thing, was Jesus."</blockquote>
<p>Maria's husband was baptized two years before her. Her two kids will be next, when they are ready. The whole family is part of a Journey Group now.</p>
<p>If you have a testimony like this and want to share it, email the office. We are always looking for stories of what God is doing in this church.</p>`,
		category: 'testimonials',
		author: 'Pastor John Williams',
		hero_image: HERO('photo-1438232992991-995b7058bbb3'),
		alt_text: 'Light streaming through a sanctuary window',
		published_at: '2026-04-13T08:00:00Z',
		created_at: '2026-04-13T08:00:00Z',
		updated_at: '2026-04-13T08:00:00Z'
	},
	{
		id: 'post-007',
		slug: 'journey-groups-spring-launch',
		title: 'Journey Groups Spring Launch',
		subtitle: 'Twelve new groups across Houston starting in March. Find one near you.',
		body: `<p>Spring Journey Group sign-ups are open. Twelve new groups across the Houston metro area. Most meet weekly in homes. A few meet at coffee shops. One meets on a back porch in Cypress when the weather cooperates.</p>
<p>If you have not been part of one before, here is what to expect.</p>
<ul class="my-4 ml-5 list-outside list-disc space-y-2">
  <li>Small group, usually six to twelve adults</li>
  <li>Weekly meeting, ninety minutes give or take</li>
  <li>Some food, some scripture, some prayer for one another</li>
  <li>Friendships that outlast the group</li>
</ul>
<p>If you have been around Calvary for a while and you do not know more than ten people by name, a Journey Group is the fix. Sign up via the contact form and we will match you to a group that fits your schedule and neighborhood.</p>`,
		category: 'ministry',
		author: 'Marcus Lee',
		hero_image: HERO('photo-1529070538774-1843cb3265df'),
		alt_text: 'Small group sharing a meal around a table',
		published_at: '2026-03-01T08:00:00Z',
		created_at: '2026-03-01T08:00:00Z',
		updated_at: '2026-03-01T08:00:00Z'
	}
];

/** Published = published_at not null and not in the future. */
export function isPublished(p: BlogPost, now: Date = new Date()): boolean {
	if (p.published_at === null) return false;
	return new Date(p.published_at).getTime() <= now.getTime();
}

/** Sort by published_at desc, with nulls last. */
function byPublished(a: BlogPost, b: BlogPost): number {
	if (a.published_at === null && b.published_at === null) return 0;
	if (a.published_at === null) return 1;
	if (b.published_at === null) return -1;
	return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
}

export function getPublished(
	all: BlogPost[] = sampleBlogPosts,
	now: Date = new Date()
): BlogPost[] {
	return all.filter((p) => isPublished(p, now)).sort(byPublished);
}

export function getByCategory(
	category: BlogPost['category'],
	all: BlogPost[] = sampleBlogPosts,
	now: Date = new Date()
): BlogPost[] {
	return getPublished(all, now).filter((p) => p.category === category);
}

export function getBySlug(slug: string, all: BlogPost[] = sampleBlogPosts): BlogPost | null {
	return all.find((p) => p.slug === slug) ?? null;
}

export function getRecent(
	limit: number,
	all: BlogPost[] = sampleBlogPosts,
	now: Date = new Date()
): BlogPost[] {
	return getPublished(all, now).slice(0, limit);
}
