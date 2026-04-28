<script lang="ts">
	import HeroSection from '$lib/components/design/HeroSection.svelte';
	import SectionTitle from '$lib/components/design/SectionTitle.svelte';
	import OffsetCard from '$lib/components/design/OffsetCard.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Accordion from '$lib/components/ui/accordion';

	type Week = { id: string; title: string; body: string };

	const weeks: Week[] = [
		{
			id: 'week-1',
			title: 'Week 1: Why membership matters',
			body: `What it means to belong to a local church. Why Calvary asks for the commitment, what you can expect from us, and what we ask of you.`
		},
		{
			id: 'week-2',
			title: 'Week 2: Who we are',
			body: `Our story, our values, and the convictions that shape how we read scripture, gather on Sundays, and follow Jesus together.`
		},
		{
			id: 'week-3',
			title: 'Week 3: What we believe',
			body: `A walk through Calvary's statement of faith. The non-negotiables, the open-handed questions, and how we navigate disagreement.`
		},
		{
			id: 'week-4',
			title: 'Week 4: How we worship',
			body: `Why our Sunday service looks the way it does. Worship, scripture, prayer, communion, and how the rhythms shape us through the year.`
		},
		{
			id: 'week-5',
			title: 'Week 5: How we serve',
			body: `Where the work happens between Sundays. Ministries, journey groups, missions, serving our neighbors. Finding your place to use what God has given you.`
		},
		{
			id: 'week-6',
			title: 'Week 6: Becoming a member',
			body: `A conversation with our pastors, a chance to ask anything still on your heart, and the official welcome on a Sunday morning.`
		}
	];

	const why = [
		{
			title: 'Belonging, not just attending',
			body: `Membership is the difference between visiting a community and being part of one. It is a way to say "this is my church and these are my people."`
		},
		{
			title: 'Mutual commitment',
			body: `Calvary commits to caring for you, teaching you scripture, and helping you grow in Christ. You commit to being part of the work and rhythm of the church.`
		},
		{
			title: 'A clear next step',
			body: `If you have been around for a while and want to go deeper, Discover Calvary is the most natural next step. It makes the commitment explicit and clears the way for what comes after.`
		}
	];
</script>

<main>
	<HeroSection
		pageTitle="Become a Member"
		subtitle="Discover Calvary is a six-week class that introduces you to who we are, what we believe, and how to make Calvary your church home."
		downArrowHref="#why"
	/>

	<section id="why" class="container mx-auto my-20">
		<div class="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
			<OffsetCard
				imageUrl="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2400&auto=format&fit=crop"
				altText="A small group sharing a meal around a table"
				direction="bl"
			/>
			<div>
				<SectionTitle title="Why Become a Member" />
				<div class="space-y-6">
					{#each why as item (item.title)}
						<div>
							<h3 class="text-h4 border-primary mb-2 border-l-4 pl-4 tracking-wide">
								{item.title}
							</h3>
							<p class="text-body">{item.body}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="bg-muted-lighter py-24">
		<div class="container mx-auto max-w-4xl">
			<SectionTitle title="The Six-Week Class" />
			<p class="text-lead mb-10 max-w-3xl">
				Discover Calvary meets for six consecutive Sundays. Each session is about an hour, with room
				for questions and conversation. You can attend with a spouse, a friend, or solo.
			</p>
			<Accordion.Root type="single" value="week-1">
				{#each weeks as week (week.id)}
					<Accordion.Item value={week.id}>
						<Accordion.Trigger class="text-h4 text-left hover:no-underline">
							{week.title}
						</Accordion.Trigger>
						<Accordion.Content class="text-body max-w-3xl">
							{week.body}
						</Accordion.Content>
					</Accordion.Item>
				{/each}
			</Accordion.Root>
		</div>
	</section>

	<section class="container mx-auto my-20">
		<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-3">
			<div class="lg:col-span-2">
				<SectionTitle title="Common Questions" />
				<Accordion.Root type="single">
					<Accordion.Item value="when">
						<Accordion.Trigger class="text-h4 text-left hover:no-underline">
							When does the next class start?
						</Accordion.Trigger>
						<Accordion.Content class="text-body max-w-3xl">
							Discover Calvary runs a few times a year. Sign up below and we will tell you the next
							start date and how to register.
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="missed">
						<Accordion.Trigger class="text-h4 text-left hover:no-underline">
							What if I miss a week?
						</Accordion.Trigger>
						<Accordion.Content class="text-body max-w-3xl">
							Life happens. We can catch you up between sessions or carry your spot to the next
							class. We would rather you finish well than rush.
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="commit">
						<Accordion.Trigger class="text-h4 text-left hover:no-underline">
							Do I have to become a member at the end?
						</Accordion.Trigger>
						<Accordion.Content class="text-body max-w-3xl">
							No. The point of the class is to give you enough information to make the choice well.
							If at the end you decide Calvary is not your spot, we will help you find one that is.
						</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>
			</div>
			<div class="bg-primary text-primary-foreground rounded-lg p-8 shadow-xl">
				<h3 class="text-h4 mb-3 tracking-wide">Sign up for the next class</h3>
				<p class="text-body mb-6 opacity-95">
					Tell us you are interested and we will send you the next start date and registration link.
				</p>
				<Button
					href="/contact"
					variant="outline"
					class="text-foreground w-full px-6 py-6 text-base font-normal tracking-wide"
				>
					I'm Interested
				</Button>
			</div>
		</div>
	</section>
</main>
