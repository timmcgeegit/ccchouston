<!-- lib/components/Announcement.svelte -->
<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import type { Announcement } from "$lib/types/announcements";

  export let announcement: Announcement;
</script>

<Card.Root class="shadow-lg aspect-square overflow-hidden bg-cover" style="background-image: url('{announcement.img_square}');">
  <div class="hover:bg-primary rounded hover:bg-opacity-80 translate-y-5 hover:-translate-y-0 transition-all duration-500 opacity-0 hover:opacity-100 text-white w-full h-full">
    <a href={announcement.link}>
      <div class="flex flex-col justify-center leading-tight h-full">
        <Card.Header class="pb-2">
          <Card.Title class="text-xl tracking-wide">{announcement.title}</Card.Title>
        </Card.Header>
        <Card.Content>
          <p>{announcement.description}</p>
        </Card.Content>
      </div>
    </a>
  </div>
</Card.Root>