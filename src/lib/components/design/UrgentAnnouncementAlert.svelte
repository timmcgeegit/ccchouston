<script lang="ts">
	import AlertTriangle from '@lucide/svelte/icons/alert-triangle';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import type { Announcement } from '$lib/types/announcements';

	interface Props {
		announcement: Announcement;
	}

	let { announcement }: Props = $props();

	const isExternal = $derived(announcement.link_type === 'external');
</script>

<div
	role="alert"
	aria-live="polite"
	class="bg-destructive text-destructive-foreground border-destructive/30 w-full border-b shadow-sm"
>
	<div
		class="container mx-auto flex flex-col items-center gap-3 px-4 py-3 text-center sm:flex-row sm:justify-center sm:gap-4"
	>
		<div class="flex items-center gap-2">
			<AlertTriangle class="size-5 shrink-0" aria-hidden="true" />
			<p class="text-body font-semibold tracking-wide">{announcement.title}</p>
		</div>
		<p class="text-body opacity-95">{announcement.description}</p>
		{#if announcement.link_target}
			<a
				href={announcement.link_target}
				target={isExternal ? '_blank' : undefined}
				rel={isExternal ? 'noopener noreferrer' : undefined}
				class="hover:bg-destructive-foreground/15 inline-flex items-center gap-1 rounded px-2 py-1 text-sm font-semibold underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
			>
				Learn more
				<ArrowRight class="size-4" aria-hidden="true" />
			</a>
		{/if}
	</div>
</div>
