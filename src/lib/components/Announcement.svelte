<!-- lib/components/Announcement.svelte -->
<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import type { Announcement } from '$lib/types/announcements';

	export let announcement: Announcement;
</script>

<Card.Root
	class="aspect-square overflow-hidden bg-cover shadow-lg"
	style="background-image: url('{announcement.img_square}');"
>
	<div
		class="hover:bg-primary hover:bg-opacity-80 h-full w-full translate-y-5 rounded text-white opacity-0 transition-all duration-500 hover:-translate-y-0 hover:opacity-100"
	>
		<a href={announcement.link}>
			<div class="flex h-full flex-col justify-center leading-tight">
				<Card.Header class="pb-2">
					<Card.Title class="text-h4 tracking-wide">{announcement.title}</Card.Title>
				</Card.Header>
				<Card.Content>
					<p>{announcement.description}</p>
				</Card.Content>
			</div>
		</a>
	</div>
</Card.Root>
