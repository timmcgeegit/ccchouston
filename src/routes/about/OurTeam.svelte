<script lang="ts">
  import type { TeamMember as TeamMemberType } from "$lib/types/teammember";
  import TeamMemberComponent from "$lib/components/TeamMember.svelte";
  
  export let teamMembers: TeamMemberType[] = [];
  console.log('Team members data in OurTeam.svelte:', teamMembers);
  </script>
  
  <section class="bg-muted-lighter py-24">
    <div class="container mx-auto">
      <h2 class="text-5xl font-black mb-4">Our Team</h2>
      <div class="w-12 h-1 bg-primary mb-4"></div>
      <p class="text-xl max-w-4xl leading-[1.5] mb-8">
        Meet our dedicated team members who are passionate about serving the Lord and making a difference in our community.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {#each teamMembers as member}
          <TeamMemberComponent {member} on:openBioModal />
        {/each}
      </div>
    </div>
  </section>