<script lang="ts">
	import SectionTitle from '$lib/components/design/SectionTitle.svelte';
	import BlogPostCard from '$lib/components/design/BlogPostCard.svelte';
	import { Button } from '$lib/components/ui/button';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import type { PageData } from './$types';
	import type { BlogCategory } from '$lib/types/blog';

	let { data }: { data: PageData } = $props();

	const categoryLabel: Record<BlogCategory, string> = {
		ministry: 'Ministry',
		events: 'Events',
		testimonials: 'Testimonies'
	};

	const publishedLabel = $derived(
		data.post.published_at
			? new Date(data.post.published_at).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})
			: ''
	);
</script>

<main>
	<article>
		{#if data.post.hero_image}
			<div
				class="bg-muted aspect-[16/7] w-full bg-cover bg-center"
				style="background-image: url('{data.post.hero_image}');"
				role="img"
				aria-label={data.post.alt_text}
			></div>
		{/if}

		<div class="container mx-auto my-12 max-w-3xl">
			<a
				href="/blog"
				class="text-primary mb-6 inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline"
			>
				<ArrowLeft class="size-4" aria-hidden="true" />
				Back to all posts
			</a>

			<p class="text-caption text-primary mb-4 tracking-widest uppercase">
				{categoryLabel[data.post.category]}
			</p>
			<h1 class="text-h1 mb-4 tracking-wide">{data.post.title}</h1>
			{#if data.post.subtitle}
				<p class="text-lead text-muted-foreground mb-6">{data.post.subtitle}</p>
			{/if}
			<p class="text-caption text-muted-foreground border-muted mb-10 border-b pb-6">
				{data.post.author}{#if publishedLabel}
					· {publishedLabel}{/if}
			</p>

			<div class="prose prose-lg max-w-none">
				{@html data.post.body}
			</div>
		</div>
	</article>

	{#if data.related.length > 0}
		<section class="bg-muted-lighter py-20">
			<div class="container mx-auto">
				<SectionTitle title="More From The Blog" />
				<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each data.related as post (post.id)}
						<BlogPostCard {post} />
					{/each}
				</div>
				<div class="mt-12 flex justify-center">
					<Button href="/blog" variant="outline" class="px-8 py-6">All Posts</Button>
				</div>
			</div>
		</section>
	{/if}
</main>
