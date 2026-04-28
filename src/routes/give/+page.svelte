<script lang="ts">
	import HeroSection from '$lib/components/design/HeroSection.svelte';
	import SectionTitle from '$lib/components/design/SectionTitle.svelte';
	import OffsetCard from '$lib/components/design/OffsetCard.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Accordion from '$lib/components/ui/accordion';

	const SHELBY_GIVING_URL = 'https://shelbygiving.com/App/Giving/cccwebsite';

	type GivingPath = {
		title: string;
		description: string;
		fundLabel: string;
	};

	const ways: GivingPath[] = [
		{
			title: 'Tithes and offerings',
			description:
				'Regular giving that supports the day-to-day life of the church. Worship, teaching, kids and youth ministries, building, staff.',
			fundLabel: 'General Fund'
		},
		{
			title: 'Missions',
			description:
				'Sends short-term teams, supports our missionary partners, and funds local outreach work like the Hairgrove Elementary partnership.',
			fundLabel: 'Calvary Missions'
		},
		{
			title: 'Support a missionary directly',
			description:
				'Designated giving for a specific missionary or partner ministry. Use the per-missionary link from the Missions page or specify the recipient in the giving form.',
			fundLabel: 'By name'
		},
		{
			title: 'Designated and special funds',
			description:
				'Capital projects, benevolence, special events. Choose a designated fund in Shelby Giving when these are active.',
			fundLabel: 'Designated funds'
		}
	];

	const faqs = [
		{
			id: 'recurring',
			question: 'Can I set up a recurring gift?',
			answer:
				'Yes. Shelby Giving lets you schedule weekly, biweekly, or monthly recurring gifts. You can change or cancel them anytime from your Shelby account.'
		},
		{
			id: 'methods',
			question: 'What payment methods are supported?',
			answer:
				'Shelby Giving accepts ACH bank transfer, debit card, and credit card. ACH carries the lowest processing fee, so more of your gift reaches the ministry.'
		},
		{
			id: 'mail',
			question: 'Can I give by check or in person?',
			answer:
				'Yes. Drop checks in the offering basket on Sunday morning, or mail them to the church office. Make checks payable to Calvary Community Church and note any designation on the memo line.'
		},
		{
			id: 'tax',
			question: 'How do I get a giving statement?',
			answer:
				'Annual giving statements are sent in January for the prior tax year. You can also pull statements anytime from your Shelby Giving account.'
		}
	];
</script>

<main>
	<HeroSection
		pageTitle="Give"
		subtitle="Support the work of the church and the people God is sending out from it."
		downArrowHref="#ways"
	/>

	<section id="ways" class="container mx-auto my-20">
		<div class="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
			<OffsetCard
				imageUrl="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2400&auto=format&fit=crop"
				altText="Open hands holding seeds"
				direction="br"
			/>
			<div>
				<SectionTitle title="A Word On Generosity" />
				<p class="text-body mb-4">
					Giving is worship. It is one of the ways we say with our lives that what we have belongs
					to God. Calvary is funded entirely by the generosity of the people who call this church
					home. Whether you have been around for years or are visiting for the first time, you do
					not need to give. We just want to make it easy if you want to.
				</p>
				<p class="text-body">
					All online giving is handled through Shelby Giving, the same platform our finance team
					uses for the rest of the church.
				</p>
			</div>
		</div>
		<div class="mt-12 flex justify-center">
			<Button
				href={SHELBY_GIVING_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="px-12 py-7 text-lg font-normal tracking-wide"
			>
				Give Online
			</Button>
		</div>
	</section>

	<section class="bg-muted-lighter py-24">
		<div class="container mx-auto">
			<SectionTitle title="Ways to Give" />
			<p class="text-lead mb-10 max-w-3xl">
				When you give online, Shelby Giving lets you choose where your gift goes. Pick the path that
				fits how you want to give.
			</p>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				{#each ways as way (way.title)}
					<div
						class="bg-background rounded-lg p-6 shadow-md transition-shadow duration-300 hover:shadow-xl"
					>
						<h3 class="text-h4 border-primary mb-3 border-l-4 pl-4 tracking-wide">
							{way.title}
						</h3>
						<p class="text-body mb-4">{way.description}</p>
						<p class="text-caption text-muted-foreground tracking-widest uppercase">
							Choose: {way.fundLabel}
						</p>
					</div>
				{/each}
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
					<Accordion.Content class="text-body max-w-3xl">
						{faq.answer}
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</section>

	<section class="container mx-auto my-20 max-w-4xl text-center">
		<SectionTitle title="Need Help?" />
		<p class="text-body mb-6">
			If something goes wrong with online giving or you have a question about a designation, our
			finance team is happy to help. Reach out and someone will get back to you.
		</p>
		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<Button href="/contact" variant="outline" class="px-8 py-6 text-lg font-normal">
				Contact the Office
			</Button>
			<Button
				href={SHELBY_GIVING_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="px-8 py-6 text-lg font-normal"
			>
				Give Online
			</Button>
		</div>
	</section>
</main>
