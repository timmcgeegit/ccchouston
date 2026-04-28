<script lang="ts">
	import HeroSection from '$lib/components/design/HeroSection.svelte';
	import SectionTitle from '$lib/components/design/SectionTitle.svelte';
	import BlogPostCard from '$lib/components/design/BlogPostCard.svelte';
	import { Button } from '$lib/components/ui/button';
	import { BLOG_CATEGORIES, type BlogCategory, type BlogPost } from '$lib/types/blog';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const categoryLabel: Record<BlogCategory, string> = {
		ministry: 'Ministry',
		events: 'Events',
		testimonials: 'Testimonies'
	};

	let activeCategory: BlogCategory | 'all' = $state('all');

	const filtered = $derived<BlogPost[]>(
		activeCategory === 'all' ? data.posts : data.posts.filter((p) => p.category === activeCategory)
	);
</script>

<main>
	<HeroSection
		pageTitle="Blog"
		subtitle="Devotionals, ministry updates, and testimonies from the life of the church."
		downArrowHref="#posts"
	/>

	<section id="posts" class="container mx-auto my-16">
		<SectionTitle title="Latest Posts" />

		<div class="mb-10 flex flex-wrap gap-2">
			<Button
				variant={activeCategory === 'all' ? 'default' : 'outline'}
				size="sm"
				onclick={() => (activeCategory = 'all')}
			>
				All
			</Button>
			{#each BLOG_CATEGORIES as category (category)}
				<Button
					variant={activeCategory === category ? 'default' : 'outline'}
					size="sm"
					onclick={() => (activeCategory = category)}
				>
					{categoryLabel[category]}
				</Button>
			{/each}
		</div>

		{#if filtered.length === 0}
			<p class="text-body text-muted-foreground py-12 text-center">
				No posts in this category yet.
			</p>
		{:else}
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each filtered as post (post.id)}
					<BlogPostCard {post} />
				{/each}
			</div>
		{/if}
	</section>
</main>
