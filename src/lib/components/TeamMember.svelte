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

  
      <Dialog.Root>
        <Dialog.Trigger>
          <Card.Root class="transition-all rounded-lg overflow-hidden ease-in-out h-full duration-500 hover:-translate-y-3 hover:shadow-xl shadow-lg" >
            <div class="aspect-w-1 aspect-h-1 mb-6">
              <img src={member.team_img} alt={member.team_name} class="object-cover w-full rounded" />
            </div>
            <Card.Header class="mb-3 py-0 text-left ">
              <Card.Title class="text-2xl py-1 pl-3 border-l-4 border-primary tracking-wide">{member.team_name}</Card.Title>
              <Card.Description class="pl-4">{member.team_position}</Card.Description>
            </Card.Header>
            <Card.Content>
            </Card.Content>
          </Card.Root>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title class="mb-3 border-b-2 pb-1 inline-block">{member.team_name}<span class="font-normal">, {member.team_position}</span></Dialog.Title>
            <Dialog.Description>
             <div class="space-y-2 bio">{@html member.team_bio}</div>
             <!-- TODO: on mobile its currently switching to center aligned, it needs to stay left aligned
                  TODO: it also needs to be scrollable if the bio is too long to fit on the screen
                  TODO: we need to make sure the modal does not fill the screen vertically on mobile -->
            </Dialog.Description>
          </Dialog.Header>
        </Dialog.Content>
      </Dialog.Root>
  

<!-- 
<Card.Root class="transition-all rounded-lg overflow-hidden ease-in-out h-full duration-500 hover:-translate-y-3 hover:shadow-xl shadow-lg pb-3">

  <div class="aspect-w-1 aspect-h-1 mb-6">
    <img src={member.team_img} alt={member.team_name} class="object-cover w-full rounded" />
  </div>
  <Card.Header class="mb-3 py-0">
    <Card.Title class="text-primary text-2xl tracking-wide">{member.team_name}</Card.Title>
    <Card.Description>{member.team_position}</Card.Description>
  </Card.Header>
  <Card.Content>
      <Dialog.Root>
        <Dialog.Trigger>Read Bio</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>{member.team_name}<span class="font-normal">, {member.team_position}</span></Dialog.Title>
            <Dialog.Description>
              {member.team_bio}
            </Dialog.Description>
          </Dialog.Header>
        </Dialog.Content>
      </Dialog.Root>
  </Card.Content>
</Card.Root> -->