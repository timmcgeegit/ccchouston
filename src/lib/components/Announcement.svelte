<!-- lib/components/Announcement.svelte -->
<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import type { Announcement } from "$lib/types/types";

  export let announcement: Announcement;
</script>

<Card.Root class="shadow-lg aspect-square overflow-hidden bg-cover" style="background-image: url('{announcement.imageUrl}');">
  <div class="hover:bg-primary rounded hover:bg-opacity-60 translate-y-5 hover:-translate-y-0 transition-all duration-500 opacity-0 hover:opacity-100 text-white w-full h-full">
    <a href={announcement.link}>
      <div class="flex flex-col justify-center h-full">
        <Card.Header class="pb-2">
          <Card.Title class="text-2xl tracking-wide">{announcement.title}</Card.Title>
        </Card.Header>
        <Card.Content>
          <p>{announcement.content}</p>
        </Card.Content>
      </div>
    </a>
  </div>
</Card.Root>