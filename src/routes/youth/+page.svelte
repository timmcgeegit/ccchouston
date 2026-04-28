<script lang="ts">
	// PLACEHOLDER CONTENT — real /youth copy lands in a later session.
	// Audience to write for: middle + high school students and their parents.
	import MinistryPage from '$lib/components/design/MinistryPage.svelte';
	import type { MinistryPageContent } from '$lib/types/ministry-page';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const content: MinistryPageContent = {
		hero: {
			title: 'Youth Ministry',
			subtitle:
				'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
		},
		bannerImage: {
			url: 'https://images.unsplash.com/photo-1496024840928-4c417adf211d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			altText: 'Calvary youth gathered together'
		},
		intro: {
			title: 'Youth Ministry at Calvary',
			body: `<p>Placeholder intro copy. Real content for the youth audience (middle and high school) is coming in a follow-up content pass. This page currently uses the same template as Kids and Adults.</p><p>Have you found your place to help you in your journey? You are welcome to join us as we seek to follow God together.</p>`
		},
		feature: {
			title: 'Special Event',
			image: {
				url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
				altText: 'Youth gathered around a table'
			},
			direction: 'tl',
			body: `<p>Placeholder feature copy. Replace with the next youth event or initiative.</p>`,
			cta: { label: 'Register Here', href: '/contact' }
		},
		programs: {
			title: 'Calvary Youth Schedule',
			intro:
				'Placeholder programs intro. Replace with the actual youth weekly rhythm, Bible study, and recurring events.',
			items: [
				{
					id: 'placeholder-1',
					label: 'Youth Program Placeholder #1',
					body: `<p>Placeholder program description. Replace with real youth programming details.</p>`
				},
				{
					id: 'placeholder-2',
					label: 'Youth Program Placeholder #2',
					body: `<p>Placeholder program description. Replace with real youth programming details.</p>`
				}
			]
		},
		announcements: {
			title: 'Youth Announcements',
			intro:
				'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
		}
	};
</script>

<MinistryPage {content} announcements={data.featuredAnnouncements} />
