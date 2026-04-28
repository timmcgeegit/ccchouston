<!-- src/lib/components/TeamMember.svelte -->
<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { TeamMember } from '$lib/types/teammember';
	import * as Dialog from '$lib/components/ui/dialog';

	export let member: TeamMember;
</script>

<Card.Root
	class="h-full overflow-hidden rounded-lg pb-3 shadow-lg transition-all duration-500 ease-in-out hover:shadow-xl"
>
	<div class="aspect-w-1 aspect-h-1 mb-6">
		<img src={member.team_img} alt={member.team_name} class="w-full rounded object-cover" />
	</div>
	<Card.Header class="mb-3 py-0 text-left ">
		<Card.Title class="border-primary text-h4 border-l-4 py-1 pl-3 tracking-wide"
			>{member.team_name}</Card.Title
		>
		<Card.Description class="pl-4">{member.team_position}</Card.Description>
	</Card.Header>
	<Card.Content>
		{#if member.team_bio}
			<Dialog.Root>
				<Dialog.Trigger class="text-primary border-primary text-caption ml-4 border-b-2"
					>Read Bio</Dialog.Trigger
				>
				<Dialog.Content>
					<Dialog.Header>
						<Dialog.Title
							>{member.team_name}<span class="font-normal">, {member.team_position}</span
							></Dialog.Title
						>
						<Dialog.Description>
							<div class="bio space-y-2">{@html member.team_bio}</div>
						</Dialog.Description>
					</Dialog.Header>
				</Dialog.Content>
			</Dialog.Root>
		{/if}
	</Card.Content>
</Card.Root>

<!-- 
            TODO: it also needs to be scrollable if the bio is too long to fit on the screen
            TODO: we need to make sure the modal does not fill the screen vertically on mobile 
            DONE: Read bio section should only show up if there is a bio filled in. 
  -->
