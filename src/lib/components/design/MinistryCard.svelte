<script lang="ts">
	interface Props {
		title: string;
		description: string;
		imageUrl: string;
		altText: string;
		href: string;
	}

	let { title, description, imageUrl, altText, href }: Props = $props();
</script>

<a
	{href}
	aria-label="{title}: {altText}"
	class="group relative block aspect-[4/5] overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
>
	<div
		class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
		style="background-image: url('{imageUrl}');"
		role="img"
		aria-hidden="true"
	></div>
	<div
		class="from-foreground/90 absolute inset-0 bg-gradient-to-t via-transparent to-transparent"
	></div>
	<div class="absolute inset-0 flex flex-col justify-end p-6 text-white">
		<h3 class="text-h3 mb-2 tracking-wide">{title}</h3>
		<p
			class="text-body mb-4 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100"
		>
			{description}
		</p>
		<div
			class="text-primary-100 flex items-center gap-2 text-sm font-semibold tracking-wider uppercase"
		>
			<span>Learn More</span>
			<span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
		</div>
	</div>
</a>
