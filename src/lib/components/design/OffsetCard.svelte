<script lang="ts">
	type Direction = 'tl' | 'tr' | 'bl' | 'br';

	interface Props {
		imageUrl: string;
		altText: string;
		direction?: Direction;
		aspect?: string;
	}

	let {
		imageUrl,
		altText,
		direction = 'br',
		aspect = 'aspect-[6/4] lg:aspect-[4/4]'
	}: Props = $props();

	const outerOffset = $derived(
		{
			tl: '-top-5 -left-5',
			tr: '-top-5 -right-5',
			bl: '-bottom-5 -left-5',
			br: '-right-5 -bottom-5'
		}[direction]
	);

	const innerOffset = $derived(
		{
			tl: 'top-5 left-5',
			tr: 'top-5 right-5',
			bl: 'bottom-5 left-5',
			br: 'right-5 bottom-5'
		}[direction]
	);
</script>

<div class="bg-primary relative {outerOffset} overflow-visible rounded-lg">
	<div
		class="relative {innerOffset} {aspect} flex h-full w-full flex-row items-center justify-center overflow-clip rounded-lg bg-cover bg-center align-middle transition-all duration-500"
		style="background-image: url('{imageUrl}');"
		role="img"
		aria-label={altText}
	>
		<div
			class="from-muted-darker/60 to-foreground/20 z-1 h-full w-full flex-col justify-center bg-gradient-to-bl bg-cover align-middle"
		></div>
	</div>
</div>
