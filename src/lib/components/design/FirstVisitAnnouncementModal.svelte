<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Button } from '$lib/components/ui/button';
	import type { Announcement } from '$lib/types/announcements';

	interface Props {
		/** Modal-eligible announcements, already filtered for active. */
		candidates: Announcement[];
	}

	let { candidates }: Props = $props();

	const STORAGE_PREFIX = 'cccx:modal-seen:';
	const DEFAULT_DISMISS_DAYS = 30;

	let open = $state(false);
	let active = $state<Announcement | null>(null);

	function storageKey(id: string): string {
		return `${STORAGE_PREFIX}${id}`;
	}

	function isStillDismissed(a: Announcement, now: number): boolean {
		if (!browser) return false;
		const raw = window.localStorage.getItem(storageKey(a.id));
		if (!raw) return false;
		const dismissedAt = Number(raw);
		if (!Number.isFinite(dismissedAt)) return false;
		const days = a.modal_dismiss_days ?? DEFAULT_DISMISS_DAYS;
		const windowMs = days * 24 * 60 * 60 * 1000;
		return now - dismissedAt < windowMs;
	}

	function rememberDismissal(id: string): void {
		if (!browser) return;
		window.localStorage.setItem(storageKey(id), String(Date.now()));
	}

	onMount(() => {
		const now = Date.now();
		const next = candidates.find((a) => !isStillDismissed(a, now));
		if (next) {
			active = next;
			open = true;
		}
	});

	$effect(() => {
		if (!open && active) {
			rememberDismissal(active.id);
		}
	});

	const isExternal = $derived(active?.link_type === 'external');
</script>

{#if active}
	<Dialog.Root bind:open>
		<Dialog.Content class="sm:max-w-lg">
			{#if active.img_16x9}
				<div
					class="bg-muted -m-6 mb-2 aspect-[16/9] w-[calc(100%+3rem)] bg-cover bg-center"
					style="background-image: url('{active.img_16x9}');"
					role="img"
					aria-label={active.alt_text}
				></div>
			{/if}
			<Dialog.Header>
				<Dialog.Title class="text-h3 tracking-wide">{active.title}</Dialog.Title>
				<Dialog.Description class="text-body">
					{active.description}
				</Dialog.Description>
			</Dialog.Header>
			<Dialog.Footer>
				<Button variant="outline" onclick={() => (open = false)}>Maybe later</Button>
				<Button
					href={active.link_target}
					target={isExternal ? '_blank' : undefined}
					rel={isExternal ? 'noopener noreferrer' : undefined}
					onclick={() => (open = false)}
				>
					Learn more
				</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
{/if}
