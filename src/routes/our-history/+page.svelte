<script lang="ts">
	import HeroSection from '$lib/components/design/HeroSection.svelte';
	import SectionTitle from '$lib/components/design/SectionTitle.svelte';
	import OffsetCard from '$lib/components/design/OffsetCard.svelte';
	import { Button } from '$lib/components/ui/button';

	type Era = {
		id: string;
		years: string;
		title: string;
		body: string;
	};

	const eras: Era[] = [
		{
			id: 'founding',
			years: '1983',
			title: 'Founding',
			body: `Calvary was planted in 1983 in northwest Houston with a small group of families and a clear conviction: to build a community that follows Jesus together, marked by intimacy with God, true Christian community, and the work of God's kingdom in the earth.`
		},
		{
			id: 'growth',
			years: '1987',
			title: 'Grand Opening',
			body: `The current building opened in 1987. It has been the home Calvary has gathered in ever since. The walls have heard four decades of worship, prayer, teaching, weddings, funerals, baptisms, and the everyday rhythms of a family of faith.`
		},
		{
			id: 'celebrate-40',
			years: '2023',
			title: 'Celebrate 40',
			body: `Calvary marked forty years of ministry in 2023. Generations of families now call Calvary home, and the same vision that shaped the founding still shapes the church today: intimacy, community, and kingdom.`
		},
		{
			id: 'now',
			years: 'Today',
			title: 'Where we are now',
			body: `Calvary is a multi-generational community in Cypress, Texas. Sunday worship at 10 AM. Kids and youth ministries running in parallel. Journey Groups across the city. Missions partners around the world. The work is the same as it always has been.`
		}
	];
</script>

<main>
	<HeroSection
		pageTitle="Our History"
		subtitle="Forty years of following Jesus together in northwest Houston."
		downArrowHref="#story"
	/>

	<section id="story" class="container mx-auto my-20">
		<div class="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
			<div>
				<SectionTitle title="A Community On A Journey" />
				<p class="text-body mb-4">
					Calvary started small. A handful of families with a clear vision: build a community that
					does the slow, ordinary work of following Jesus together. Worship on Sunday. Bible study
					during the week. Prayer for one another. Care for the poor and the new and the hurting.
					Send people out.
				</p>
				<p class="text-body mb-4">
					Forty years on, the work is the same. Different families, different decades, different
					seasons of the church. The same conviction.
				</p>
				<p class="text-body">
					That conviction has a shape: intimacy with God, true Christian community, and extending
					the kingdom of God in the earth. It is what we are about.
				</p>
			</div>
			<OffsetCard
				imageUrl="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2400&auto=format&fit=crop"
				altText="Light through stained glass"
				direction="br"
			/>
		</div>
	</section>

	<section class="bg-muted-lighter py-24">
		<div class="container mx-auto max-w-5xl">
			<SectionTitle title="Milestones" />
			<p class="text-lead mb-12 max-w-3xl">
				Some of the moments that shaped the church we are today.
			</p>
			<div class="space-y-12">
				{#each eras as era (era.id)}
					<article class="grid grid-cols-1 items-start gap-6 md:grid-cols-[120px_1fr]">
						<p class="text-h3 text-primary tracking-wide">{era.years}</p>
						<div>
							<h3 class="text-h4 border-primary mb-3 border-l-4 pl-4 tracking-wide">
								{era.title}
							</h3>
							<p class="text-body">{era.body}</p>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section class="container mx-auto my-20 max-w-4xl text-center">
		<SectionTitle title="Joining The Story" />
		<p class="text-body mb-8">
			Forty years is a long time, and we are still going. If you want to be part of what comes next,
			the simplest way in is a Sunday morning. Plan a visit and we will be watching for you.
		</p>
		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<Button href="/plan-visit" class="px-8 py-6 text-lg font-normal">Plan A Visit</Button>
			<Button href="/about" variant="outline" class="px-8 py-6 text-lg font-normal">
				About Calvary
			</Button>
		</div>
	</section>
</main>
