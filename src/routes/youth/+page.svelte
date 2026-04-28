<!-- The objective of this page is to cast vision for the purpose of adult ministries and to give people an overview of how to, as an adult, get involved at the church throughout the year. Not just right now but if a guest is trying to evaluate what it looks like to be involved throughout the year this page should give an idea of that. -->
<script lang="ts">
	import HeroSection from '$lib/components/design/HeroSection.svelte';
	import SectionTitle from '$lib/components/design/SectionTitle.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Accordion from '$lib/components/ui/accordion';
	import Announcement from '$lib/components/Announcement.svelte';
	import type { Announcement as AnnouncementType } from '$lib/types/announcements';

	export let data: { featuredAnnouncements: AnnouncementType[] };
</script>

<main>
	<HeroSection
		pageTitle="Youth Ministry"
		subtitle="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
	/>

	<section class="container mx-auto mt-20 mb-12">
		<div
			class="flex aspect-[4/4] w-full flex-row items-center justify-center overflow-clip rounded-lg bg-cover bg-center align-middle transition-all duration-500 md:aspect-[8/4] lg:aspect-[10/4]"
			style="background-image: url('https://images.unsplash.com/photo-1496024840928-4c417adf211d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');"
		>
			<div
				class="from-muted/60 to-foreground/40 flex h-full w-full flex-col justify-center bg-gradient-to-b bg-cover text-center align-middle"
			></div>
		</div>
	</section>
	<section id="next" class="container mx-auto my-32 flex flex-row justify-between gap-5">
		<div class="text-body max-w-3xl space-y-4">
			<SectionTitle title="This is a page for kids" />
			<p class="text-body">
				Calvary is a community of people making a journey with each other in following Jesus. That
				is the heart behind all we do– every ministry, every structure, every program, class,
				service, or event– we are here seeking to make a place where people can come and meet with
				God. May this be a place where you and I can encounter our Maker, praise our Father,
				surrender to our Master, and love the Lord our God with all our heart, and mind, and soul,
				and strength.
			</p>
			<p class="text-body">
				Have you found your place to help you in your journey? You are welcome to join us as we seek
				to follow God together.
			</p>
		</div>
	</section>

	<section class="mx-auto max-w-6xl">
		<div class="container mx-auto my-32 grid grid-cols-1 gap-14 align-middle md:grid-cols-3">
			<div class="bg-primary relative -top-5 -left-5 overflow-visible rounded-lg md:col-span-1">
				<div
					class="relative top-5 left-5 flex aspect-[6/4] h-full w-full flex-row items-center justify-center overflow-clip rounded-lg bg-cover bg-center align-middle transition-all duration-500 lg:aspect-[4/4]"
					style="background-image: url('https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');"
				>
					<div
						class="from-muted-darker/60 to-foreground/20 z-1 h-full w-full flex-col justify-center bg-gradient-to-bl bg-cover align-middle"
					></div>
				</div>
			</div>
			<div class="flex flex-col justify-center md:col-span-2">
				<SectionTitle title="Special Event" />
				<p class="text-body">
					Welcome to our exclusive annual event! Join us for an unforgettable experience filled with
					excitement, entertainment, and inspiration. Get ready to be part of something
					extraordinary and create lasting memories with us. Save the date and stay tuned for more
					details!
				</p>
				<div class="mt-8">
					<Button
						href="/contact"
						class="flex-inline mb-0 justify-start py-6 text-lg font-normal tracking-wide transition-all duration-300"
						aria-label="Register for an event">Register Here</Button
					>
				</div>
			</div>
		</div>
	</section>

	<section class="mx-auto max-w-6xl">
		<div class="container my-32 max-w-4xl">
			<SectionTitle title="Calvary Kids Schedule" />
			<p class="text-lead mb-8 max-w-4xl">
				We are here seeking to make a place where people can come and meet with God. There are many
				ways that we serve the Lord and steward the influence he gives us. Click the links below to
				learn more about the different ways you can get connected.
			</p>
			<Accordion.Root type="single">
				<Accordion.Item value="item-1">
					<Accordion.Trigger class="text-h4 text-left hover:no-underline"
						>⭐️ Summer Bash Registration is Open!</Accordion.Trigger
					>
					<Accordion.Content class="text-body max-w-3xl">
						Looking for something fun to do this Summer? Then join us each Wednesday in June & July
						from 5-6:30 PM for an evening of fun! Each week is a different theme, featuring a
						kid-friendly Bible message, music, games, crafts, & dinner. Your kids won’t want to miss
						this, so sign up today!
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-2">
					<Accordion.Trigger class="text-h4 text-left hover:no-underline"
						>⭐️ Sunday Morning Bible Study @ 9:00 AM</Accordion.Trigger
					>
					<Accordion.Content class="text-body max-w-3xl">
						Fall Lesson Series: Gospel Project’s From Creation to Chaos From Creation to Chaos helps
						kids learn that in the beginning, God created everything for His glory and our good.
						When sin entered the world in the Garden of Eden and spread to people, creation appeared
						to be ruined. But as God established a covenant with Abraham, He proved that nothing is
						outside of His plan or control to redeem His creation from sin. Kids’ Bible Study meets
						on Sunday mornings at 9:00 in Room 204 upstairs.
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-3">
					<Accordion.Trigger class="text-h4 text-left hover:no-underline"
						>⭐️ New Kids Church Lesson Series, Sundays @ 10:00 AM</Accordion.Trigger
					>
					<Accordion.Content class="text-body max-w-3xl">
						Join us Sunday mornings, beginning April 21, as we dive into the life and leadership of
						Moses, and the Israelites’ incredible journey to freedom. And the Lord brought us out of
						Egypt with a mighty hand and an outstretched arm, with great deeds of terror, with signs
						and wonders.” Deuteronomy 26:8 Kids Church meets on Sunday mornings at 10:00 in Room 201
						upstairs.
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-4">
					<Accordion.Trigger class="text-h4 text-left hover:no-underline"
						>⭐️ Calvary Kids Club, Wednesdays @ 6:30 PM</Accordion.Trigger
					>
					<Accordion.Content class="text-body max-w-3xl">
						Boys and Girls Club meets each Wednesday, beginning September 6 through May 1, from
						6:30-8:00 pm. Kids Club is a safe place where kids in 1st-5th grade can make friends,
						have fun, and grow in godly character. Kids will enjoy character-building lessons,
						games, art, crafts, cooking, gym time, snacks, and special events. Registration for
						2023-24 is now CLOSED. Registration for 2024-25 will open on August 1.
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		</div>
	</section>

	<section class="container mx-auto my-24">
		<SectionTitle title="Kids Announcements" />
		<p class="text-lead mb-8 max-w-xl">
			Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur
			cupidatat.
		</p>
		<div class="grid grid-cols-1 gap-3 md:min-h-32 md:grid-cols-2 lg:grid-cols-4">
			{#each data.featuredAnnouncements as announcement (announcement.id)}
				<Announcement {announcement} />
			{/each}
		</div>
	</section>
</main>
