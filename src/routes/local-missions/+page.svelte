<script lang="ts">
	import HeroSection from '$lib/components/design/HeroSection.svelte';
	import SectionTitle from '$lib/components/design/SectionTitle.svelte';
	import OffsetCard from '$lib/components/design/OffsetCard.svelte';
	import { Button } from '$lib/components/ui/button';
	import ExternalLink from '@lucide/svelte/icons/external-link';
	import type { PageData } from './$types';
	import type { PartnerCategory } from '$lib/types/ministry-partner';

	let { data }: { data: PageData } = $props();

	const categoryLabel: Record<PartnerCategory, string> = {
		prayer: 'Prayer',
		compassion: 'Compassion',
		disaster_relief: 'Disaster Relief',
		church_planting: 'Church Planting',
		evangelism: 'Evangelism',
		other: 'Other'
	};
</script>

<main>
	<HeroSection
		pageTitle="Local Missions"
		subtitle="The Houston work. Partnerships that have run for years and the people we serve alongside."
		downArrowHref="#approach"
	/>

	<section id="approach" class="container mx-auto my-20">
		<div class="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
			<div>
				<SectionTitle title="How We Approach Local Missions" />
				<p class="text-body mb-4">
					Local missions at Calvary is not occasional charity. It is sustained partnership. We pick
					a small number of organizations, get to know them, show up consistently, and stay long
					enough that staff there know us by name.
				</p>
				<p class="text-body mb-4">
					That kind of work is slower than a one-time service day. It also goes farther. Real
					relationships create real change.
				</p>
				<p class="text-body">
					Our flagship local partnership is with Hairgrove Elementary, a school in our neighborhood
					that we serve through mentoring, supply drives, and teacher encouragement. The other local
					partners listed below are organizations we walk alongside in a mix of regular and seasonal
					ways.
				</p>
			</div>
			<OffsetCard
				imageUrl="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2400&auto=format&fit=crop"
				altText="A volunteer reading with an elementary student"
				direction="tl"
			/>
		</div>
	</section>

	<section class="bg-muted-lighter py-24">
		<div class="container mx-auto">
			<SectionTitle title="Our Local Partners" />
			<p class="text-lead mb-10 max-w-3xl">
				Each of these organizations is doing real work in Houston. Click through to learn more about
				them or get involved directly.
			</p>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each data.localPartners as partner (partner.id)}
					<a
						href={partner.external_url}
						target="_blank"
						rel="noopener noreferrer"
						class="bg-background group block rounded-lg p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
					>
						<p class="text-caption text-primary mb-2 tracking-widest uppercase">
							{categoryLabel[partner.category]}
						</p>
						<h3
							class="text-h4 group-hover:text-primary border-primary mb-3 border-l-4 pl-4 tracking-wide transition-colors duration-300"
						>
							{partner.name}
						</h3>
						<p class="text-body mb-4">{partner.description}</p>
						<p class="text-primary inline-flex items-center gap-1 text-sm font-semibold">
							Visit <ExternalLink class="size-4" aria-hidden="true" />
						</p>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<section class="container mx-auto my-20 max-w-4xl text-center">
		<SectionTitle title="Want To Serve?" />
		<p class="text-body mb-6">
			The fastest way into local missions at Calvary is to show up to a serve day or talk to Angela
			in the missions office. Different partnerships need different help, and we can match you to
			where you fit.
		</p>
		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<Button href="/serve" class="px-8 py-6 text-lg font-normal">Serve With Us</Button>
			<Button href="/contact" variant="outline" class="px-8 py-6 text-lg font-normal">
				Contact The Office
			</Button>
		</div>
	</section>
</main>
