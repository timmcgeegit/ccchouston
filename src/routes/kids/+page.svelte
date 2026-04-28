<script lang="ts">
	import MinistryPage from '$lib/components/design/MinistryPage.svelte';
	import type { MinistryPageContent } from '$lib/types/ministry-page';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const content: MinistryPageContent = {
		hero: {
			title: 'Kids Ministry',
			subtitle:
				'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
		},
		bannerImage: {
			url: 'https://images.unsplash.com/photo-1594913495702-0872744c6968?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			altText: 'Calvary kids gathered for ministry'
		},
		intro: {
			title: 'This is a page for kids',
			body: `<p>Calvary is a community of people making a journey with each other in following Jesus. That is the heart behind all we do – every ministry, every structure, every program, class, service, or event – we are here seeking to make a place where people can come and meet with God. May this be a place where you and I can encounter our Maker, praise our Father, surrender to our Master, and love the Lord our God with all our heart, and mind, and soul, and strength.</p><p>Have you found your place to help you in your journey? You are welcome to join us as we seek to follow God together.</p>`
		},
		feature: {
			title: 'Special Event',
			image: {
				url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
				altText: 'Calvary kids learning together'
			},
			direction: 'tl',
			body: `<p>Welcome to our exclusive annual event! Join us for an unforgettable experience filled with excitement, entertainment, and inspiration. Get ready to be part of something extraordinary and create lasting memories with us. Save the date and stay tuned for more details!</p>`,
			cta: { label: 'Register Here', href: '/contact' }
		},
		programs: {
			title: 'Calvary Kids Schedule',
			intro:
				'We are here seeking to make a place where people can come and meet with God. There are many ways that we serve the Lord and steward the influence he gives us. Click the links below to learn more about the different ways you can get connected.',
			items: [
				{
					id: 'summer-bash',
					label: '⭐️ Summer Bash Registration is Open!',
					body: `<p>Looking for something fun to do this Summer? Then join us each Wednesday in June &amp; July from 5-6:30 PM for an evening of fun! Each week is a different theme, featuring a kid-friendly Bible message, music, games, crafts, &amp; dinner. Your kids won't want to miss this, so sign up today!</p>`
				},
				{
					id: 'sunday-bible-study',
					label: '⭐️ Sunday Morning Bible Study @ 9:00 AM',
					body: `<p>Fall Lesson Series: Gospel Project's From Creation to Chaos. From Creation to Chaos helps kids learn that in the beginning, God created everything for His glory and our good. When sin entered the world in the Garden of Eden and spread to people, creation appeared to be ruined. But as God established a covenant with Abraham, He proved that nothing is outside of His plan or control to redeem His creation from sin. Kids' Bible Study meets on Sunday mornings at 9:00 in Room 204 upstairs.</p>`
				},
				{
					id: 'kids-church',
					label: '⭐️ New Kids Church Lesson Series, Sundays @ 10:00 AM',
					body: `<p>Join us Sunday mornings, beginning April 21, as we dive into the life and leadership of Moses, and the Israelites' incredible journey to freedom. "And the Lord brought us out of Egypt with a mighty hand and an outstretched arm, with great deeds of terror, with signs and wonders." Deuteronomy 26:8. Kids Church meets on Sunday mornings at 10:00 in Room 201 upstairs.</p>`
				},
				{
					id: 'kids-club',
					label: '⭐️ Calvary Kids Club, Wednesdays @ 6:30 PM',
					body: `<p>Boys and Girls Club meets each Wednesday, beginning September 6 through May 1, from 6:30-8:00 pm. Kids Club is a safe place where kids in 1st-5th grade can make friends, have fun, and grow in godly character. Kids will enjoy character-building lessons, games, art, crafts, cooking, gym time, snacks, and special events. Registration for 2023-24 is now CLOSED. Registration for 2024-25 will open on August 1.</p>`
				}
			]
		},
		announcements: {
			title: 'Kids Announcements',
			intro:
				'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
		}
	};
</script>

<MinistryPage {content} announcements={data.featuredAnnouncements} />
