<script lang="ts">
	import type { TeamMember as TeamMemberType } from '$lib/types/teammember';
	import TeamMemberComponent from '$lib/components/TeamMember.svelte';
	import SectionTitle from '$lib/components/design/SectionTitle.svelte';

	interface Props {
		teamMembers?: TeamMemberType[];
	}

	let { teamMembers = [] }: Props = $props();
</script>

<section class="bg-muted-lighter py-24">
	<div class="container mx-auto">
		<SectionTitle title="Our Team" />
		<p class="text-lead mb-8 max-w-4xl">
			Meet our dedicated team members who are passionate about serving the Lord and making a
			difference in our community.
		</p>
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{#each teamMembers as member (member.id)}
				<TeamMemberComponent {member} />
			{/each}
		</div>
	</div>
</section>
