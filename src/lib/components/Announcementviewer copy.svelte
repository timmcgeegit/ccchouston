<script lang="ts">
    import type { Announcement } from '$lib/types/types';
  
    let inputId: number | undefined;
    let announcement: Announcement | undefined;
    let error: string | undefined;
  
    async function fetchAnnouncement() {
      if (inputId === undefined) return;
  
      try {
        const response = await fetch(`/api/announcements/?id=${inputId}`);
        if (response.ok) {
          announcement = await response.json();
          error = undefined;
        } else {
          announcement = undefined;
          error = `Error ${response.status}: ${response.statusText}`;
        }
      } catch (err) {
        announcement = undefined;
        error = `Error: ${err}`;
      }
    }
  </script>
  
  <div>
    <input type="number" placeholder="Enter announcement ID" bind:value={inputId} on:input={fetchAnnouncement} />
  </div>
  
  {#if error}
    <p>{error}</p>
  {:else if announcement}
    <pre>{JSON.stringify(announcement, null, 2)}</pre>
  {:else}
    <p>No announcement found for the given ID.</p>
  {/if}