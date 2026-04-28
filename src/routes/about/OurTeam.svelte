<script lang="ts">
	import type { TeamMember as TeamMemberType } from '$lib/types/teammember';
	import TeamMemberComponent from '$lib/components/TeamMember.svelte';

	export let teamMembers: TeamMemberType[] = [];
</script>

<section class="bg-muted-lighter py-24">
	<div class="container mx-auto">
		<h2 class="text-h2 mb-4">Our Team</h2>
		<div class="bg-primary mb-4 h-1 w-12"></div>
		<p class="text-lead mb-8 max-w-4xl">
			Meet our dedicated team members who are passionate about serving the Lord and making a
			difference in our community.
		</p>
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{#each teamMembers as member (member.team_id)}
				<TeamMemberComponent {member} />
			{/each}
		</div>
	</div>
</section>
