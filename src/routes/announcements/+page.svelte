<!-- ccchouston/src/routes/announcements/+page.svelte -->
<script lang="ts">
	import HeroSection from '$lib/components/design/HeroSection.svelte';
	import SectionTitle from '$lib/components/design/SectionTitle.svelte';
	import AnnouncementCard from '$lib/components/design/AnnouncementCard.svelte';
	import { Button } from '$lib/components/ui/button';
	import {
		ANNOUNCEMENT_CATEGORIES,
		type Announcement,
		type AnnouncementCategory
	} from '$lib/types/announcements';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const categoryLabels: Record<AnnouncementCategory, string> = {
		church_wide: 'Church-wide',
		adults: 'Adults',
		children: 'Children',
		youth: 'Youth',
		missions: 'Missions'
	};

	let activeCategory: AnnouncementCategory | 'all' = $state('all');

	const filtered = $derived<Announcement[]>(
		activeCategory === 'all'
			? data.announcements
			: data.announcements.filter((a) => a.category === activeCategory)
	);
</script>

<main>
	<HeroSection
		pageTitle="Announcements"
		subtitle="What's happening at Calvary right now."
		downArrowHref="#list"
	/>

	<section id="list" class="container mx-auto my-16">
		<SectionTitle title="All Announcements" />

		<div class="mb-8 flex flex-wrap gap-2">
			<Button
				variant={activeCategory === 'all' ? 'default' : 'outline'}
				size="sm"
				onclick={() => (activeCategory = 'all')}
			>
				All
			</Button>
			{#each ANNOUNCEMENT_CATEGORIES as category (category)}
				<Button
					variant={activeCategory === category ? 'default' : 'outline'}
					size="sm"
					onclick={() => (activeCategory = category)}
				>
					{categoryLabels[category]}
				</Button>
			{/each}
		</div>

		{#if filtered.length === 0}
			<p class="text-body text-muted-foreground py-12 text-center">
				No announcements in this category right now.
			</p>
		{:else}
			<div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
				{#each filtered as announcement (announcement.id)}
					<AnnouncementCard {announcement} />
				{/each}
			</div>
		{/if}
	</section>
</main>
