<!-- ccchouston/src/routes/+page.svelte -->
<script lang="ts">
	import { Input } from '$lib/components/ui/input/index';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import Announcement from '$lib/components/Announcement.svelte';
	import type { Announcement as AnnouncementType } from '$lib/types/announcements';

	export let data: { featuredAnnouncements: AnnouncementType[] };
</script>

<main>
	<section class="container mx-auto">
		<div class="">
			<div class="container mx-auto my-16 flex flex-col justify-center">
				<h1 class="max-w-4xl text-5xl font-black tracking-wide uppercase lg:text-8xl">
					A Community Following <span class="text-primary">Jesus</span> Together
				</h1>
				<!-- <p class="text-xl max-w-xl leading-relaxed mb-8">Join us as we draw near to the Lord through worship, prayer, and reflecting on God’s word togther!</p> -->
				<div>
					<!-- <Button variant="outline" class="text-lg mb-0 transition-all duration-300 tracking-wide py-6 font-normal">Join Us Sunday</Button> -->
				</div>
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
			<div class="bg-primary relative -right-5 -bottom-5 overflow-visible rounded-lg">
				<div
					class="relative right-5 bottom-5 flex aspect-[6/4] h-full w-full flex-row items-center justify-center overflow-clip rounded-lg bg-cover bg-center align-middle transition-all duration-500 lg:aspect-[4/4]"
					style="background-image: url('/CCCWorship.jpg');"
				>
					<div
						class="from-muted-darker/60 to-foreground/20 z-1 h-full w-full flex-col justify-center bg-gradient-to-bl bg-cover align-middle"
					></div>
				</div>
			</div>
			<div class="flex flex-col justify-center">
				<div><h2 class="mb-4 inline-flex text-5xl font-black">Who We Are</h2></div>
				<div class="bg-primary mb-4 h-1 w-12"></div>
				<p class="text-lg">
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
			<h2 class="mb-4 text-5xl font-black">Get Connected</h2>
			<div class="bg-primary mb-4 h-1 w-12"></div>
			<p class="mb-8 max-w-4xl text-xl leading-[1.5]">
				We are here seeking to make a place where people can come and meet with God. There are many
				ways that we serve the Lord and steward the influence he gives us. Click the links below to
				learn more about the different ways you can get connected.
			</p>
			<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
				<div>
					<Card.Root
						class="h-full pb-3 shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-xl"
					>
						<img
							src="https://images.unsplash.com/photo-1594913495702-0872744c6968?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Kids Ministry"
							class="mb-6 rounded"
						/>
						<Card.Header class=" mb-3 py-0">
							<Card.Title class="border-primary border-l-4 py-1 pl-4 text-2xl tracking-wide"
								>Kids Ministries</Card.Title
							>
						</Card.Header>
						<Card.Content class="">
							<p>
								Our firm provides comprehensive legal services for commercial property owners,
								including property tax appeals, lease negotiations, and dispute resolution.
							</p>
						</Card.Content>
					</Card.Root>
				</div>
				<div>
					<Card.Root
						class="h-full pb-3 shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-xl"
					>
						<img
							src="https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Student Ministry"
							class="mb-6 rounded"
						/>
						<Card.Header class=" mb-3 py-0">
							<Card.Title class="border-primary border-l-4 py-1 pl-4 text-2xl tracking-wide"
								>Youth Ministries</Card.Title
							>
						</Card.Header>
						<Card.Content class="">
							<p>
								We offer tailored legal solutions for multi-use properties, navigating the complex
								interplay of residential, commercial, and industrial regulations.
							</p>
						</Card.Content>
					</Card.Root>
				</div>
				<div>
					<Card.Root
						class="h-full pb-3 shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-xl"
					>
						<img
							src="https://images.unsplash.com/photo-1565813086292-604790c8a97b?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Adult Ministries"
							class="mb-6 rounded"
						/>
						<Card.Header class=" mb-3 py-0">
							<Card.Title class="border-primary border-l-4 py-1 pl-4 text-2xl tracking-wide"
								>Adult Ministries</Card.Title
							>
						</Card.Header>
						<Card.Content class="">
							<p>
								Our attorneys assist residential property owners with a range of legal matters, from
								property tax appeals to homeowners' association disputes and real estate
								transactions.
							</p>
						</Card.Content>
					</Card.Root>
				</div>
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
				<h2 class="mb-4 text-5xl font-black">Special Event</h2>
				<div class="bg-primary mb-4 h-1 w-12"></div>
				<p class="text-lg">
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
			<div class="bg-primary relative -top-5 -left-5 overflow-visible rounded-lg">
				<div
					class="relative top-5 left-5 flex aspect-[6/4] h-full w-full flex-row items-center justify-center overflow-clip rounded-lg bg-cover bg-center align-middle transition-all duration-500 lg:aspect-[4/4]"
					style="background-image: url('https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');"
				>
					<div
						class="from-muted-darker/60 to-foreground/20 z-1 h-full w-full flex-col justify-center bg-gradient-to-bl bg-cover align-middle"
					></div>
				</div>
			</div>
		</div>
	</section>

	<section>
		<div
			class="bg-primary container mx-auto my-32 flex max-w-6xl flex-row content-center justify-center gap-24 rounded-lg p-8 py-20 align-middle shadow-2xl"
		>
			<div class="max-w-lg">
				<h2 class="text-primary-foreground mb-4 text-3xl font-bold">Subscribe to our newsletter</h2>
				<p class="text-primary-foreground text-lg">
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
		<h2 class="mb-4 text-5xl font-black">Featured Announcements</h2>
		<div class="bg-primary mb-4 h-1 w-12"></div>
		<p class="mb-8 max-w-xl text-xl leading-relaxed">
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
