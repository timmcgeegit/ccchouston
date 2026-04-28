<script lang="ts">
	// PLACEHOLDER CONTENT — real /serve copy lands in a later session.
	// Audience to write for: adults looking for ways to volunteer at Calvary or in
	// the local community. Distinct from /missions (cross-cultural / global focus).
	import MinistryPage from '$lib/components/design/MinistryPage.svelte';
	import type { MinistryPageContent } from '$lib/types/ministry-page';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const content: MinistryPageContent = {
		hero: {
			title: 'Serve',
			subtitle:
				'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
		},
		bannerImage: {
			url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			altText: 'Volunteers serving the community'
		},
		intro: {
			title: 'Serve With Calvary',
			body: `<p>Placeholder intro copy. Real content for the serve audience (adults looking to volunteer at Calvary or in the local community) is coming in a follow-up content pass.</p><p>Have you found your place to help you in your journey? You are welcome to join us as we seek to follow God together.</p>`
		},
		feature: {
			title: 'Special Event',
			image: {
				url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
				altText: 'Volunteers serving the community'
			},
			direction: 'tl',
			body: `<p>Placeholder feature copy. Replace with the next serve event or volunteer push.</p>`,
			cta: { label: 'Register Here', href: '/contact' }
		},
		programs: {
			title: 'Where to Serve',
			intro:
				'Placeholder programs intro. Replace with the real list of recurring volunteer opportunities at Calvary and with our local partners.',
			items: [
				{
					id: 'placeholder-1',
					label: 'Serve Placeholder #1',
					body: `<p>Placeholder program description. Replace with a real volunteer opportunity.</p>`
				},
				{
					id: 'placeholder-2',
					label: 'Serve Placeholder #2',
					body: `<p>Placeholder program description. Replace with a real volunteer opportunity.</p>`
				}
			]
		},
		announcements: {
			title: 'Serve Announcements',
			intro:
				'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
		}
	};
</script>

<MinistryPage {content} announcements={data.featuredAnnouncements} />
