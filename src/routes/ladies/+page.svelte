<script lang="ts">
	import MinistryPage from '$lib/components/design/MinistryPage.svelte';
	import type { MinistryPageContent } from '$lib/types/ministry-page';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const content: MinistryPageContent = {
		hero: {
			title: 'Womens Ministry',
			subtitle: 'A place to be known, to grow, and to love Jesus together.'
		},
		bannerImage: {
			url: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2670&auto=format&fit=crop',
			altText: 'Women in worship together'
		},
		intro: {
			title: 'Who This Is For',
			body: `<p>His Delight is Calvarys ministry to women. Whatever your season, whether you are single, married, raising kids, navigating a hard year, or quietly thriving, there is a place for you here.</p><p>The work is the same as the rest of the church. We follow Jesus together. We open scripture. We pray for one another. We carry each other.</p><p>If you are looking for a way in, the easiest places to start are Delight Nights and the annual retreat.</p>`
		},
		feature: {
			title: 'Womens Retreat 2026',
			image: {
				url: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2400&auto=format&fit=crop',
				altText: 'A quiet sanctuary at sunrise'
			},
			direction: 'tl',
			body: `<p>A weekend in the country with the women of Calvary. Worship, teaching, rest, real conversation, and good food. Spaces fill quickly because it is the best weekend of our year.</p>`,
			cta: { label: 'Sign Up', href: '/contact' }
		},
		programs: {
			title: 'How We Gather',
			intro: 'Here are the regular rhythms of our ministry. Pick the one that fits this season.',
			items: [
				{
					id: 'delight-nights',
					label: 'Delight Nights',
					body: `<p>Monthly evening gathering. Third Friday of every month at 7 PM. Worship, teaching, prayer, and time to talk afterward. No childcare on-site, but bring a friend.</p>`
				},
				{
					id: 'bible-study',
					label: 'Womens Bible Study',
					body: `<p>Weekly Tuesday morning, 9:30 to 11 AM, in the church library. Currently working through the gospel of John. Childcare provided. Drop in any week.</p>`
				},
				{
					id: 'retreat',
					label: 'Annual Retreat',
					body: `<p>Spring weekend retreat off-site. Friday night through Sunday morning. Sign-ups open in late winter and the weekend fills, so jump in early. Scholarships available so cost does not keep anyone home.</p>`
				},
				{
					id: 'mentoring',
					label: 'Discipleship and Mentoring',
					body: `<p>Want a more personal relationship with another woman in the church? We can help match you with a mentor or a discipleship pair. Contact Sarah Williams or use the contact form.</p>`
				}
			]
		},
		announcements: {
			title: 'Upcoming For Women',
			intro: 'What is on the calendar for our ministry right now.'
		}
	};
</script>

<MinistryPage {content} announcements={data.announcements} urgent={data.urgent} />
