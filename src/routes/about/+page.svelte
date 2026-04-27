<!-- src/routes/about/+page.svelte -->
<script lang="ts">
	let pageTitle = 'About Us';
	import ArrowDown from '@lucide/svelte/icons/arrow-down';
	import OurTeam from './OurTeam.svelte';
	import type { PageData } from './$types';
	import * as Accordion from '$lib/components/ui/accordion';

	export let data: PageData;
</script>

<main>
	<section class="container mx-auto my-20 content-center items-center justify-center text-center">
		<h1 class="mb-4 font-sans text-5xl font-black tracking-wide uppercase lg:text-8xl">
			{pageTitle}
		</h1>
		<p class="mx-auto mb-8 max-w-xl text-xl leading-relaxed">
			Calvary is a community of people making a journey with each other in following Jesus.
		</p>
		<a href="#next" class="transition-all duration-300"
			><ArrowDown class="mx-auto animate-bounce justify-center" /></a
		>
	</section>

	<section class="container mx-auto my-20">
		<div
			class="flex aspect-[4/4] w-full flex-row items-center justify-center overflow-clip rounded-lg bg-cover bg-center align-middle transition-all duration-500 md:aspect-[8/4] lg:aspect-[10/4]"
			style="background-image: url('/ccchoustondrone.png');"
		>
			<div
				class="from-muted/60 to-foreground/40 flex h-full w-full flex-col justify-center bg-gradient-to-b bg-cover text-center align-middle"
			></div>
		</div>
	</section>
	<section id="next" class="container mx-auto my-32 flex flex-row justify-between gap-5">
		<div class="max-w-3xl space-y-4 text-lg">
			<h2 class="mb-4 text-5xl font-black">This is a page about us</h2>
			<div class="bg-primary mb-4 h-1 w-12"></div>
			<p class="text-lg">
				Calvary is a community of people making a journey with each other in following Jesus. That
				is the heart behind all we do– every ministry, every structure, every program, class,
				service, or event– we are here seeking to make a place where people can come and meet with
				God. May this be a place where you and I can encounter our Maker, praise our Father,
				surrender to our Master, and love the Lord our God with all our heart, and mind, and soul,
				and strength.
			</p>
			<p class="text-lg">
				Calvary is a community of people making a journey with each other in following Jesus. That
				is the heart behind all we do– every ministry, every structure, every program, class,
				service, or event– we are here seeking to make a place where people can come and meet with
				God. May this be a place where you and I can encounter our Maker, praise our Father,
				surrender to our Master, and love the Lord our God with all our heart, and mind, and soul,
				and strength.
			</p>
			<p class="text-lg">
				Have you found your place to help you in your journey? You are welcome to join us as we seek
				to follow God together.
			</p>
		</div>
	</section>
	<section class="my-32">
		<div
			class="container mx-auto grid grid-cols-1 items-center gap-8 sm:grid-cols-1 lg:grid-cols-3"
		>
			<div class="hidden lg:block">
				<img
					class="rounded-lg"
					src="https://images.unsplash.com/photo-1632846733217-44c338bf3135?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt=""
				/>
			</div>
			<div class="col-span-2 container mx-auto my-5">
				<h2 class="my-4 text-5xl font-black">Our Vision</h2>
				<div class="bg-primary mb-4 h-1 w-12"></div>
				<h3 class="my-4 max-w-xl text-xl">
					Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint
					consectetur cupidatat.
				</h3>
				<Accordion.Root type="single" value="item-1">
					<Accordion.Item value="item-1">
						<Accordion.Trigger class="text-left md:text-xl lg:text-2xl"
							>Intimacy: Establishing people in intimacy with God.</Accordion.Trigger
						>
						<Accordion.Content class="text-md">
							Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint
							consectetur cupidatat.
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="item-2">
						<Accordion.Trigger class="text-left md:text-xl lg:text-2xl"
							>Community: Expressing True Christian community.</Accordion.Trigger
						>
						<Accordion.Content class="text-md">
							Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint
							consectetur cupidatat.
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="item-3">
						<Accordion.Trigger class="text-left md:text-xl lg:text-2xl"
							>Kingdom: Extending the Kingdom of God in the earth.</Accordion.Trigger
						>
						<Accordion.Content class="text-md">
							Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint
							consectetur cupidatat.
						</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>
			</div>
		</div>
	</section>

	<section id="our-team" class="relative z-10">
		<OurTeam teamMembers={data.teamMembers} />
	</section>
</main>

<style>
</style>
