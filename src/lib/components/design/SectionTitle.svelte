<script lang="ts">
	interface Props {
		title: string;
		level?: 'h2' | 'h3';
		inverted?: boolean;
	}

	let { title, level = 'h2', inverted = false }: Props = $props();

	const sizeClass = $derived(level === 'h3' ? 'text-h3' : 'text-h2');
</script>

{#if level === 'h3'}
	<h3 class="{sizeClass} mb-4 {inverted ? 'text-primary-foreground' : ''}">{title}</h3>
{:else}
	<h2 class="{sizeClass} mb-4 {inverted ? 'text-primary-foreground' : ''}">{title}</h2>
{/if}
<div class="mb-4 h-1 w-12 {inverted ? 'bg-primary-foreground' : 'bg-primary'}"></div>
