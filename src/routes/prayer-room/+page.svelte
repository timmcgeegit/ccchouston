<script lang="ts">
	import HeroSection from '$lib/components/design/HeroSection.svelte';
	import SectionTitle from '$lib/components/design/SectionTitle.svelte';
	import OffsetCard from '$lib/components/design/OffsetCard.svelte';
	import { Button } from '$lib/components/ui/button';
	import { DAY_LABELS, type DayOfWeek } from '$lib/types/schedule-block';
	import { groupBlocksByDay, formatTime } from '$lib/data/schedule-blocks';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const grouped = $derived(groupBlocksByDay(data.blocks));
	const orderedDays: DayOfWeek[] = [1, 2, 3, 4, 5, 6, 0];
	const visibleDays = $derived(orderedDays.filter((d) => grouped.has(d)));
</script>

<main>
	<HeroSection
		pageTitle="Prayer Room"
		subtitle="A quiet space set aside for prayer. Open during posted hours each week."
		downArrowHref="#about"
	/>

	<section id="about" class="container mx-auto my-20">
		<div class="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
			<div>
				<SectionTitle title="What This Space Is" />
				<p class="text-body mb-4">
					The prayer room is a small, intentional space at the back of the building. Soft lighting,
					comfortable seating, scripture on the walls, no agenda and no audience.
				</p>
				<p class="text-body mb-4">
					Some hours are unstructured. Show up, pray however you pray, leave when you are ready.
					Other hours are worship-led: a team facilitates with quiet music and occasional scripture
					reading. Both kinds of time matter. Both have a place on the schedule.
				</p>
				<p class="text-body">
					You do not need to sign up. You do not need to know anyone. You can come for ten minutes
					or two hours.
				</p>
			</div>
			<OffsetCard
				imageUrl="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2400&auto=format&fit=crop"
				altText="Quiet light through stained glass"
				direction="br"
			/>
		</div>
	</section>

	<section class="bg-muted-lighter py-24">
		<div class="container mx-auto max-w-4xl">
			<SectionTitle title="Weekly Hours" />
			<p class="text-lead mb-8 max-w-3xl">
				Hours rotate seasonally. These are this seasons. Days not listed are closed.
			</p>
			{#if visibleDays.length === 0}
				<p class="text-body text-muted-foreground">The prayer room is closed this week.</p>
			{:else}
				<div class="space-y-6">
					{#each visibleDays as day (day)}
						<div class="bg-background rounded-lg p-6 shadow-md">
							<h3 class="text-h3 text-primary mb-3 tracking-wide">{DAY_LABELS[day]}</h3>
							<ul class="space-y-2">
								{#each grouped.get(day) ?? [] as block (block.id)}
									<li class="text-body flex flex-wrap items-baseline gap-3">
										<span class="font-semibold">
											{formatTime(block.starts_at_time)} to {formatTime(block.ends_at_time)}
										</span>
										{#if block.label}
											<span class="text-muted-foreground text-sm">{block.label}</span>
										{/if}
									</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</section>

	<section class="container mx-auto my-20 max-w-4xl text-center">
		<SectionTitle title="Submit A Prayer Request" />
		<p class="text-body mb-6">
			If you would like the prayer team to pray for something specific, you can submit a request
			anytime. Requests are kept confidential.
		</p>
		<Button href="/prayer-request" class="px-8 py-6 text-lg font-normal">Submit A Request</Button>
	</section>
</main>
