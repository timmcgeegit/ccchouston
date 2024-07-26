<!-- src/lib/components/TeamMember.svelte -->
<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import type { TeamMember } from "$lib/types/teammember";
  import { createEventDispatcher } from 'svelte';
  import * as Dialog from "$lib/components/ui/dialog";

  export let member: TeamMember;

  const dispatch = createEventDispatcher();

  function handleBioClick() {
    dispatch('openBioModal', member);
  }
</script>
<Card.Root class="transition-all rounded-lg overflow-hidden ease-in-out h-full duration-500 hover:shadow-xl shadow-lg pb-3">

  <div class="aspect-w-1 aspect-h-1 mb-6">
    <img src={member.team_img} alt={member.team_name} class="object-cover w-full rounded" />
  </div>
  <Card.Header class="mb-3 py-0 text-left ">
    <Card.Title class="text-2xl py-1 pl-3 border-l-4 border-primary tracking-wide">{member.team_name}</Card.Title>
    <Card.Description class="pl-4">{member.team_position}</Card.Description>
  </Card.Header>
  <Card.Content>
    {#if member.team_bio}
    <Dialog.Root>
      <Dialog.Trigger class="text-sm text-primary border-b-2 border-primary ml-4">Read Bio</Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>{member.team_name}<span class="font-normal">, {member.team_position}</span></Dialog.Title>
          <Dialog.Description>
            <div class="space-y-2 bio">{@html member.team_bio}</div>
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