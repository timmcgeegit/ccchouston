<script lang="ts">
	import type { BlogPost } from '$lib/types/blog';

	interface Props {
		post: BlogPost;
	}

	let { post }: Props = $props();

	const publishedLabel = $derived(
		post.published_at
			? new Date(post.published_at).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})
			: ''
	);

	const categoryLabel: Record<BlogPost['category'], string> = {
		ministry: 'Ministry',
		events: 'Events',
		testimonials: 'Testimonies'
	};
</script>

<a
	href="/blog/{post.slug}"
	class="group bg-background block overflow-hidden rounded-lg shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
	aria-label="{post.title}: {post.subtitle ?? ''}"
>
	{#if post.hero_image}
		<div
			class="aspect-[16/9] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
			style="background-image: url('{post.hero_image}');"
			role="img"
			aria-label={post.alt_text}
		></div>
	{:else}
		<div class="bg-primary aspect-[16/9] w-full"></div>
	{/if}
	<div class="p-6">
		<p class="text-caption text-primary mb-3 tracking-widest uppercase">
			{categoryLabel[post.category]}
		</p>
		<h3 class="text-h4 group-hover:text-primary mb-2 tracking-wide transition-colors duration-300">
			{post.title}
		</h3>
		{#if post.subtitle}
			<p class="text-body text-muted-foreground mb-4">{post.subtitle}</p>
		{/if}
		<p class="text-caption text-muted-foreground">
			{post.author}{#if publishedLabel}
				· {publishedLabel}{/if}
		</p>
	</div>
</a>
