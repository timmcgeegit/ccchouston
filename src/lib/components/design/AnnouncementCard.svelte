<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import type { Announcement } from '$lib/types/announcements';

	interface Props {
		announcement: Announcement;
	}

	let { announcement }: Props = $props();
</script>

<a
	href={announcement.link}
	aria-label="{announcement.title}: {announcement.alt_text}"
	class="group block aspect-square"
>
	<Card.Root
		class="relative h-full overflow-hidden bg-cover bg-center shadow-lg transition-shadow duration-500 hover:shadow-xl"
		style="background-image: url('{announcement.img_square}');"
	>
		{#if announcement.optional_overlay_title}
			<div
				class="from-foreground/80 absolute inset-0 flex flex-col justify-end bg-gradient-to-t to-transparent p-4 text-white transition-opacity duration-500 group-hover:opacity-0"
			>
				<h3 class="text-h4 tracking-wide">{announcement.optional_overlay_title}</h3>
			</div>
		{/if}
		<div
			class="bg-primary/85 absolute inset-0 flex flex-col justify-center p-6 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
		>
			<h3 class="text-h4 mb-2 tracking-wide">{announcement.title}</h3>
			<p class="text-body">{announcement.description}</p>
		</div>
	</Card.Root>
</a>
