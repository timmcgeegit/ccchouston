<script lang="ts">
	import HeroSection from '$lib/components/design/HeroSection.svelte';
	import SectionTitle from '$lib/components/design/SectionTitle.svelte';
	import OffsetCard from '$lib/components/design/OffsetCard.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Accordion from '$lib/components/ui/accordion';

	const ADDRESS = '15551 Mueschke Rd, Cypress, TX 77433';
	const MAPS_EMBED =
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.4583!2d-95.7283!3d29.9283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQ2FsdmFyeSBDb21tdW5pdHkgQ2h1cmNo!5e0!3m2!1sen!2sus!4v0';

	const expectations = [
		{
			id: 'arrive',
			label: 'When you arrive',
			body: `Plan to show up about ten minutes before service. Park anywhere in the main lot. A greeter at the front door will help you find your way and answer any questions about kids check-in.`
		},
		{
			id: 'kids',
			label: 'Bringing kids',
			body: `Calvary Kids has classes for nursery through 5th grade during the 10 AM service. Check your child in at the kids check-in desk just inside the main entrance. We use a name tag and tear-tag system so only you can pick them up.`
		},
		{
			id: 'service',
			label: 'During the service',
			body: `Worship runs about 75 minutes total. Music for the first half, teaching for the second. The room is mid-sized so you will not get lost in the back. Come as you are. Most people wear something between casual and business casual.`
		},
		{
			id: 'after',
			label: 'After the service',
			body: `Coffee and conversation in the lobby. If you are new, stop by the welcome desk so we can put a face to the name and help you find your next step.`
		}
	];
</script>

<main>
	<HeroSection
		pageTitle="Plan Your Visit"
		subtitle="If you have never been to Calvary, here is what to expect on your first Sunday."
		downArrowHref="#service"
	/>

	<section id="service" class="container mx-auto my-20">
		<div class="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
			<div>
				<SectionTitle title="Service Times" />
				<p class="text-h3 text-primary mb-2 tracking-wide">Sundays at 10 AM</p>
				<p class="text-body mb-6">
					One service. Worship, teaching, kids classes during the same hour. The whole family is
					welcome together or separately.
				</p>
				<p class="text-body text-muted-foreground">
					Wednesday Kids Club runs during the school year. See the
					<a href="/kids" class="text-primary underline-offset-4 hover:underline">Kids page</a>
					for details.
				</p>
			</div>
			<OffsetCard
				imageUrl="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2400&auto=format&fit=crop"
				altText="Sunlight through stained glass"
				direction="tl"
			/>
		</div>
	</section>

	<section class="bg-muted-lighter py-24">
		<div class="container mx-auto max-w-4xl">
			<SectionTitle title="What To Expect" />
			<p class="text-lead mb-8 max-w-3xl">
				No surprises. Here is the rhythm of a typical Sunday so you know what you are walking into.
			</p>
			<Accordion.Root type="single" value="arrive">
				{#each expectations as item (item.id)}
					<Accordion.Item value={item.id}>
						<Accordion.Trigger class="text-h4 text-left hover:no-underline">
							{item.label}
						</Accordion.Trigger>
						<Accordion.Content class="text-body max-w-3xl">
							{item.body}
						</Accordion.Content>
					</Accordion.Item>
				{/each}
			</Accordion.Root>
		</div>
	</section>

	<section class="container mx-auto my-20">
		<SectionTitle title="Where To Find Us" />
		<div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
			<div class="lg:col-span-1">
				<h3 class="text-h4 mb-2 tracking-wide">Address</h3>
				<p class="text-body mb-6">{ADDRESS}</p>
				<h3 class="text-h4 mb-2 tracking-wide">Office hours</h3>
				<p class="text-body mb-6">Monday through Thursday, 9 AM to 4 PM</p>
				<h3 class="text-h4 mb-2 tracking-wide">Phone</h3>
				<p class="text-body mb-6">(281) 463-2310</p>
				<Button
					href="https://maps.google.com/?q={encodeURIComponent(ADDRESS)}"
					target="_blank"
					rel="noopener noreferrer"
					class="px-8 py-6"
				>
					Get Directions
				</Button>
			</div>
			<div class="overflow-hidden rounded-lg shadow-lg lg:col-span-2">
				<iframe
					title="Calvary Community Church location map"
					src={MAPS_EMBED}
					width="100%"
					height="450"
					style="border:0;"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	</section>

	<section class="container mx-auto my-20 max-w-4xl text-center">
		<SectionTitle title="Let Us Know You Are Coming" />
		<p class="text-body mb-6">
			If you would like, fill out a connect card before you arrive so we can have someone watching
			for you Sunday morning. It also lets us know if you have questions we can answer ahead of
			time.
		</p>
		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<Button href="/connect-card" class="px-8 py-6 text-lg font-normal">Connect Card</Button>
			<Button href="/contact" variant="outline" class="px-8 py-6 text-lg font-normal">
				Contact Us
			</Button>
		</div>
	</section>
</main>
