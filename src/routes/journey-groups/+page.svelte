<script lang="ts">
	import HeroSection from '$lib/components/design/HeroSection.svelte';
	import SectionTitle from '$lib/components/design/SectionTitle.svelte';
	import OffsetCard from '$lib/components/design/OffsetCard.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Accordion from '$lib/components/ui/accordion';

	const faqs = [
		{
			id: 'what',
			question: 'What is a Journey Group?',
			answer:
				'A small group of six to twelve adults who meet weekly to follow Jesus together. Most groups meet in homes, share a meal or snack, open scripture, and pray for one another. Friendships are the byproduct.'
		},
		{
			id: 'where',
			question: 'Where do they meet?',
			answer:
				'Across the Houston metro area. Different groups meet on different nights of the week to make it easier to find one near where you live or work. Some are mixed, some are single-gender, some are couples-only. We will help match you.'
		},
		{
			id: 'who',
			question: 'Who leads them?',
			answer:
				'Trained lay leaders from Calvary, supported by our pastoral team. Leaders are not Bible scholars or counselors. They are people learning to lead a group in following Jesus, and the church holds them accountable for it.'
		},
		{
			id: 'kids',
			question: 'What about my kids?',
			answer:
				'Some groups arrange childcare together, some are kid-friendly with kids playing in the next room, and a few are adults-only. When you sign up, tell us what you need and we will match you to a fit.'
		},
		{
			id: 'ready',
			question: 'I am not sure I am ready.',
			answer:
				'Most people in groups now were not sure either. The biggest leap is filling out the form. Try one season. If it is not the right fit, no obligation.'
		}
	];
</script>

<main>
	<HeroSection
		pageTitle="Journey Groups"
		subtitle="The heartbeat of Calvary. Small groups across Houston following Jesus together."
		downArrowHref="#why"
	/>

	<section id="why" class="container mx-auto my-20">
		<div class="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
			<OffsetCard
				imageUrl="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2400&auto=format&fit=crop"
				altText="A small group sharing a meal around a table"
				direction="br"
			/>
			<div>
				<SectionTitle title="Why We Do This" />
				<p class="text-body mb-4">
					Sunday is essential. It is also limited. You cannot know two hundred people. You can know
					eight or ten well, and that is where the slow, ordinary work of following Jesus actually
					happens.
				</p>
				<p class="text-body mb-4">
					Journey Groups are the place where the things you hear taught on Sunday get worked out on
					Tuesday. Where someone notices you have been carrying something heavy and asks. Where you
					pray for the same job, the same kid, the same marriage week after week and watch what God
					does.
				</p>
				<p class="text-body">This is not optional Christianity. It is what the church is.</p>
			</div>
		</div>
	</section>

	<section class="bg-muted-lighter py-24">
		<div class="container mx-auto max-w-4xl">
			<SectionTitle title="What To Expect" />
			<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
				<div class="bg-background rounded-lg p-6 shadow-md">
					<h3 class="text-h4 border-primary mb-3 border-l-4 pl-4 tracking-wide">Six to twelve</h3>
					<p class="text-body">
						Small enough to know each other. Large enough to weather a few absences without falling
						apart.
					</p>
				</div>
				<div class="bg-background rounded-lg p-6 shadow-md">
					<h3 class="text-h4 border-primary mb-3 border-l-4 pl-4 tracking-wide">Weekly</h3>
					<p class="text-body">
						About 90 minutes. Some food, some scripture, some prayer. The rhythm is what makes the
						relationships go deep.
					</p>
				</div>
				<div class="bg-background rounded-lg p-6 shadow-md">
					<h3 class="text-h4 border-primary mb-3 border-l-4 pl-4 tracking-wide">Real</h3>
					<p class="text-body">
						No performance. People talk about real life and real faith and real questions. That is
						the point.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="container mx-auto my-20 max-w-4xl">
		<SectionTitle title="Common Questions" />
		<Accordion.Root type="single">
			{#each faqs as faq (faq.id)}
				<Accordion.Item value={faq.id}>
					<Accordion.Trigger class="text-h4 text-left hover:no-underline">
						{faq.question}
					</Accordion.Trigger>
					<Accordion.Content class="text-body max-w-3xl">{faq.answer}</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</section>

	<section class="bg-primary text-primary-foreground py-20">
		<div class="container mx-auto max-w-3xl text-center">
			<h2 class="text-h2 mb-4 tracking-wide">Find A Group</h2>
			<p class="text-body mb-8 opacity-95">
				Tell us a bit about your schedule and where you live. We will match you to a Journey Group
				that fits and connect you with the leader.
			</p>
			<Button
				href="/contact"
				variant="outline"
				class="text-foreground px-12 py-7 text-lg font-normal"
			>
				Match Me With A Group
			</Button>
		</div>
	</section>
</main>
