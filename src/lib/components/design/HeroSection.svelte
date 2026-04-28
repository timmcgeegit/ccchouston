<script lang="ts">
	import ArrowDown from '@lucide/svelte/icons/arrow-down';

	interface Props {
		pageTitle: string;
		subtitle?: string;
		downArrowHref?: string;
	}

	let { pageTitle, subtitle, downArrowHref = '#next' }: Props = $props();
</script>

<section class="container mx-auto my-20 content-center items-center justify-center text-center">
	<h1 class="text-display mb-4 tracking-wide uppercase">{pageTitle}</h1>
	{#if subtitle}
		<p class="text-lead mx-auto mb-8 max-w-xl">{subtitle}</p>
	{/if}
	{#if downArrowHref}
		<a href={downArrowHref} class="transition-all duration-300" aria-label="Scroll to content">
			<ArrowDown class="mx-auto animate-bounce justify-center" />
		</a>
	{/if}
</section>
