<script lang="ts">
	import HeroSection from '$lib/components/design/HeroSection.svelte';
	import SectionTitle from '$lib/components/design/SectionTitle.svelte';
	import { Button } from '$lib/components/ui/button';
	import ExternalLink from '@lucide/svelte/icons/external-link';

	// TODO confirm Shelby calendar URL with staff before launch.
	const SHELBY_CALENDAR_URL = 'https://shelbynextmembership.com';
</script>

<main>
	<HeroSection
		pageTitle="Calendar"
		subtitle="Sundays, ministry events, classes, and everything in between."
		downArrowHref="#calendar"
	/>

	<section id="calendar" class="container mx-auto my-20">
		<div class="mx-auto max-w-3xl">
			<SectionTitle title="What's On The Calendar" />
			<p class="text-body mb-4">
				The full calendar lives in our Shelby system. That is the same system our staff uses to
				schedule services, classes, ministry meetings, kids and youth events, and the rhythms that
				shape our weeks.
			</p>
			<p class="text-body mb-8">
				Click below to open the calendar. You will see public events including Sunday services,
				Wednesday Kids Club, Discover Calvary classes, ministry meetings, retreats, and special
				events.
			</p>
			<Button
				href={SHELBY_CALENDAR_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="px-12 py-7 text-lg font-normal tracking-wide"
			>
				Open Calendar
				<ExternalLink class="ml-2 size-4" aria-hidden="true" />
			</Button>
		</div>
	</section>

	<section class="bg-muted-lighter py-20">
		<div class="container mx-auto max-w-3xl text-center">
			<SectionTitle title="Looking For Something Specific?" />
			<p class="text-body mb-8">
				If you are trying to figure out the next service, the next class, or whether something is
				canceled, the ministry pages and announcements are the fastest place to look.
			</p>
			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
				<Button href="/announcements" variant="outline" class="px-6 py-6 text-base font-normal">
					Announcements
				</Button>
				<Button href="/plan-visit" variant="outline" class="px-6 py-6 text-base font-normal">
					Plan A Visit
				</Button>
				<Button href="/contact" variant="outline" class="px-6 py-6 text-base font-normal">
					Contact The Office
				</Button>
			</div>
		</div>
	</section>
</main>
