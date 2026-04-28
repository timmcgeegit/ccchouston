<!-- ccchouston/src/routes/+page.svelte -->
<script lang="ts">
	import { Input } from '$lib/components/ui/input/index';
	import { Button } from '$lib/components/ui/button';
	import SectionTitle from '$lib/components/design/SectionTitle.svelte';
	import OffsetCard from '$lib/components/design/OffsetCard.svelte';
	import MinistryCard from '$lib/components/design/MinistryCard.svelte';
	import AnnouncementCard from '$lib/components/design/AnnouncementCard.svelte';
	import type { Announcement as AnnouncementType } from '$lib/types/announcements';

	export let data: { featuredAnnouncements: AnnouncementType[] };
</script>

<main>
	<section class="container mx-auto">
		<div class="">
			<div class="container mx-auto my-16 flex flex-col justify-center">
				<p class="text-display max-w-4xl tracking-wide uppercase">
					A Community Following <span class="text-primary">Jesus</span> Together
				</p>
				<h1 class="text-h1 text-muted-foreground mt-6 max-w-4xl">
					Calvary Community Church Houston
				</h1>
			</div>
		</div>
		<div
			class="flex aspect-[4/4] w-full flex-row items-center justify-center overflow-clip rounded-lg bg-cover bg-center align-middle transition-all duration-500 md:aspect-[8/4] lg:aspect-[10/4]"
			style="background-image: url('/ccchoustondrone.png');"
		>
			<div
				class="from-muted/60 to-foreground/40 flex h-full w-full flex-col justify-center bg-gradient-to-b bg-cover text-center align-middle"
			></div>
		</div>
	</section>
	<section>
		<div class="container mx-auto my-32 grid grid-cols-1 gap-24 align-middle lg:grid-cols-2">
			<OffsetCard
				imageUrl="/CCCWorship.jpg"
				altText="Calvary congregation worshipping together"
				direction="br"
			/>
			<div class="flex flex-col justify-center">
				<SectionTitle title="Who We Are" />
				<p class="text-body">
					We are a community of people on a journey with each other in following Jesus. That is the
					heart behind all we do– every ministry, every structure, every program, class, service, or
					event. May this be a place where you and I can encounter our Maker, praise our Father,
					surrender to our Master, and love the Lord our God with all our heart, and mind, and soul,
					and strength.
				</p>
				<div>
					<Button
						class="mt-5 mb-0 py-6 text-lg font-normal tracking-wide transition-all duration-300"
						>Join Us Sunday</Button
					>
				</div>
			</div>
		</div>
	</section>

	<section class="bg-muted-lighter py-24">
		<div class="container mx-auto">
			<SectionTitle title="Get Connected" />
			<p class="text-lead mb-8 max-w-4xl">
				We are here seeking to make a place where people can come and meet with God. There are many
				ways that we serve the Lord and steward the influence he gives us. Click the links below to
				learn more about the different ways you can get connected.
			</p>
			<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
				<MinistryCard
					title="Kids Ministry"
					description="Sunday school, Kids Church, and Wednesday Kids Club for 1st through 5th grade. Built for kids to encounter Jesus."
					imageUrl="https://images.unsplash.com/photo-1594913495702-0872744c6968?q=80&w=2370&auto=format&fit=crop"
					altText="Kids learning together at Calvary"
					href="/kids"
				/>
				<MinistryCard
					title="Youth Ministry"
					description="Friday nights, retreats, and small groups for middle and high schoolers. A space to wrestle with faith together."
					imageUrl="https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?q=80&w=2370&auto=format&fit=crop"
					altText="Students gathered around a table"
					href="/youth"
				/>
				<MinistryCard
					title="Adult Ministries"
					description="Discover Calvary, Journey Groups, ladies' ministry, and Bible study. Find your place to grow."
					imageUrl="https://images.unsplash.com/photo-1565813086292-604790c8a97b?q=80&w=2370&auto=format&fit=crop"
					altText="Adults in conversation over coffee"
					href="/adults"
				/>
			</div>
			<div class="mt-24 flex flex-col justify-center gap-6 md:flex-row">
				<Button class="mb-0 py-6 text-lg font-normal tracking-wide transition-all duration-300"
					>Next Steps</Button
				>
				<Button
					href="/calendar"
					variant="outline"
					class="mb-0 py-6 text-lg font-normal tracking-wide transition-all duration-300"
					>Calendar</Button
				>
			</div>
		</div>
	</section>

	<section class="mx-auto max-w-7xl">
		<div class="container mx-auto my-32 grid grid-cols-1 gap-24 align-middle lg:grid-cols-2">
			<div class="flex flex-col justify-center">
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
						aria-label="Request a consultation button">Request Consultation</Button
					>
				</div>
			</div>
			<OffsetCard
				imageUrl="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				altText="Hands raised in worship"
				direction="tl"
			/>
		</div>
	</section>

	<section>
		<div
			class="bg-primary container mx-auto my-32 flex max-w-6xl flex-row content-center justify-center gap-24 rounded-lg p-8 py-20 align-middle shadow-2xl"
		>
			<div class="max-w-lg">
				<h2 class="text-primary-foreground text-h3 mb-4">Subscribe to our newsletter</h2>
				<p class="text-primary-foreground text-body">
					Keep up with everything happening at and around our church by signing up for our
					newsletter. It’s the best way to stay in touch and we promise not to spam you.
				</p>
			</div>
			<div class="flex justify-center align-middle">
				<form class="flex w-full max-w-sm items-center space-x-2">
					<Input type="email" class="bg-primary-foreground" placeholder="email" />
					<Button variant="outline" type="submit">Subscribe</Button>
				</form>
			</div>
		</div>
	</section>

	<section class="container mx-auto my-24">
		<SectionTitle title="Featured Announcements" />
		<p class="text-lead mb-8 max-w-xl">
			Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur
			cupidatat.
		</p>
		<div class="grid grid-cols-1 gap-3 md:min-h-32 md:grid-cols-2 lg:grid-cols-4">
			{#each data.featuredAnnouncements as announcement (announcement.id)}
				<AnnouncementCard {announcement} />
			{/each}
		</div>
	</section>
</main>
