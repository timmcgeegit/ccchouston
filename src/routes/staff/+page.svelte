<script lang="ts">
	import HeroSection from '$lib/components/design/HeroSection.svelte';
	import SectionTitle from '$lib/components/design/SectionTitle.svelte';
	import TeamMember from '$lib/components/TeamMember.svelte';
	import { Button } from '$lib/components/ui/button';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<main>
	<HeroSection
		pageTitle="Our Staff"
		subtitle="The people who carry the work of Calvary day to day."
		downArrowHref="#team"
	/>

	<section id="team" class="container mx-auto my-16">
		<SectionTitle title="Calvary Staff" />
		<p class="text-lead mb-10 max-w-3xl">
			Click on any name to read more about who they are and how they serve the church. If you need
			to reach a specific staff member, the office line is (281) 463-2310 with their extension.
		</p>
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{#each data.teamMembers as member (member.id)}
				<TeamMember {member} />
			{/each}
		</div>
	</section>

	<section class="bg-muted-lighter py-16">
		<div class="container mx-auto max-w-3xl text-center">
			<SectionTitle title="Reach Out" />
			<p class="text-body mb-6">
				Have a question for a specific person, or not sure who to talk to? The office can route you
				to the right place.
			</p>
			<Button href="/contact" class="px-8 py-6 text-lg font-normal">Contact The Office</Button>
		</div>
	</section>
</main>
