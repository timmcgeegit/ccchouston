<script lang="ts">
	import HeroSection from './HeroSection.svelte';
	import SectionTitle from './SectionTitle.svelte';
	import OffsetCard from './OffsetCard.svelte';
	import AnnouncementCard from './AnnouncementCard.svelte';
	import UrgentAnnouncementAlert from './UrgentAnnouncementAlert.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Accordion from '$lib/components/ui/accordion';
	import type { MinistryPageContent } from '$lib/types/ministry-page';
	import type { Announcement } from '$lib/types/announcements';

	interface Props {
		content: MinistryPageContent;
		announcements?: Announcement[];
		/** Ministry-scoped urgent announcement, rendered above the hero. */
		urgent?: Announcement | null;
	}

	let { content, announcements, urgent }: Props = $props();

	const showAnnouncements = $derived(
		Boolean(content.announcements && announcements && announcements.length > 0)
	);
</script>

<main>
	{#if urgent}
		<UrgentAnnouncementAlert announcement={urgent} />
	{/if}
	<HeroSection
		pageTitle={content.hero.title}
		subtitle={content.hero.subtitle}
		downArrowHref="#next"
	/>

	<section class="container mx-auto mt-20 mb-12">
		<div
			class="flex aspect-[4/4] w-full flex-row items-center justify-center overflow-clip rounded-lg bg-cover bg-center align-middle transition-all duration-500 md:aspect-[8/4] lg:aspect-[10/4]"
			style="background-image: url('{content.bannerImage.url}');"
			role="img"
			aria-label={content.bannerImage.altText}
		>
			<div
				class="from-muted/60 to-foreground/40 flex h-full w-full flex-col justify-center bg-gradient-to-b bg-cover text-center align-middle"
			></div>
		</div>
	</section>

	{#if content.intro}
		<section id="next" class="container mx-auto my-32 flex flex-row justify-between gap-5">
			<div class="text-body max-w-3xl space-y-4">
				<SectionTitle title={content.intro.title} />
				<div class="prose prose-lg max-w-none">
					{@html content.intro.body}
				</div>
			</div>
		</section>
	{/if}

	{#if content.feature}
		<section class="mx-auto max-w-6xl">
			<div class="container mx-auto my-32 grid grid-cols-1 gap-14 align-middle md:grid-cols-3">
				<div class="md:col-span-1">
					<OffsetCard
						imageUrl={content.feature.image.url}
						altText={content.feature.image.altText}
						direction={content.feature.direction ?? 'tl'}
					/>
				</div>
				<div class="flex flex-col justify-center md:col-span-2">
					<SectionTitle title={content.feature.title} />
					<div class="prose prose-lg max-w-none">
						{@html content.feature.body}
					</div>
					{#if content.feature.cta}
						<div class="mt-8">
							<Button
								href={content.feature.cta.href}
								class="flex-inline mb-0 justify-start py-6 text-lg font-normal tracking-wide transition-all duration-300"
								aria-label={content.feature.cta.label}>{content.feature.cta.label}</Button
							>
						</div>
					{/if}
				</div>
			</div>
		</section>
	{/if}

	{#if content.programs}
		<section class="mx-auto max-w-6xl">
			<div class="container my-32 max-w-4xl">
				<SectionTitle title={content.programs.title} />
				{#if content.programs.intro}
					<p class="text-lead mb-8 max-w-4xl">{content.programs.intro}</p>
				{/if}
				<Accordion.Root type="single">
					{#each content.programs.items as item (item.id)}
						<Accordion.Item value={item.id}>
							<Accordion.Trigger class="text-h4 text-left hover:no-underline"
								>{item.label}</Accordion.Trigger
							>
							<Accordion.Content class="text-body max-w-3xl">
								<div class="prose max-w-none">{@html item.body}</div>
							</Accordion.Content>
						</Accordion.Item>
					{/each}
				</Accordion.Root>
			</div>
		</section>
	{/if}

	{#if showAnnouncements && content.announcements && announcements}
		<section class="container mx-auto my-24">
			<SectionTitle title={content.announcements.title} />
			{#if content.announcements.intro}
				<p class="text-lead mb-8 max-w-xl">{content.announcements.intro}</p>
			{/if}
			<div class="grid grid-cols-1 gap-3 md:min-h-32 md:grid-cols-2 lg:grid-cols-4">
				{#each announcements as announcement (announcement.id)}
					<AnnouncementCard {announcement} />
				{/each}
			</div>
		</section>
	{/if}
</main>
