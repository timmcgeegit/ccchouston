<!-- ccchouston/src/routes/announcements/+page.svelte -->
<script lang="ts">
  import type { Announcement } from '$lib/types/announcements';
  export let data: { announcements: Announcement[] };
</script>

{#each data.announcements as announcement}
  <div>
    <h2>{announcement.title}</h2>
    <p>{announcement.description}</p>
    <!-- Display other announcement properties as needed -->
  </div>
{/each}