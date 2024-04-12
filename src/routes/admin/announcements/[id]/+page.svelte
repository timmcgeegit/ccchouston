<script lang="ts">
    import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import type { Announcement } from '$lib/types/types';
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Textarea } from "$lib/components/ui/textarea/index.js";
  import { Checkbox } from "$lib/components/ui/checkbox/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import * as Select from "$lib/components/ui/select";
  
  let announcement: Announcement | undefined;
  let error: string | undefined;
  let checked = true;
  
  const id = $page.params.id;
  
  onMount(async () => {
    await fetchAnnouncement();
  });

  async function fetchAnnouncement() {
    try {
      const response = await fetch(`/api/announcements?id=${id}`);
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
  
  async function saveAnnouncement() {
    await fetch(`/api/announcements`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(announcement)
    });
    // Navigate back to the announcements list page after saving
    window.location.href = '/admin/announcements';
  }
  </script>
  
  {#if error}
    <p>{error}</p>
  {:else if announcement}
    <div class="mx-auto grid my-5 max-w-[59rem] flex-1 auto-rows-max gap-4">
      <div class="flex items-center gap-4">
        <h1 class="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          {announcement.id === 0 ? 'Create Announcement' : 'Edit Announcement'}
        </h1>
        <div class="hidden items-center gap-2 md:ml-auto md:flex">
          <Button variant="outline" size="sm" on:click={() => window.history.back()}>Cancel</Button>
          <Button size="sm" on:click={saveAnnouncement}>Save Announcement</Button>
        </div>
      </div>
      <Card.Root>
        <Card.Header>
          <Card.Title>Announcement Details</Card.Title>
        </Card.Header>
        <Card.Content>
          <div class="grid gap-6">
            <div class="grid gap-3">
              <Label for="title">Title</Label>
              <Input id="title" type="text" class="w-full" bind:value={announcement.title} />
            </div>
            <div class="grid gap-3">
              <Label for="content">Content</Label>
              <Textarea id="content" bind:value={announcement.content} class="min-h-32" />
            </div>
            <div class="grid gap-3">
              <Label for="imageUrl">Image URL</Label>
              <Input id="imageUrl" type="text" class="w-full" bind:value={announcement.imageUrl} />
            </div>
            <div class="grid gap-3">
              <Label for="link">Link</Label>
              <Input id="link" type="text" class="w-full" bind:value={announcement.link} />
            </div>
            <div class="grid gap-3">
              <Label for="category">Category</Label>
              <select class="w-50% py-1 rounded px-3 border-2" name="category" id="category" bind:value={announcement.category} >
                <option value="">Choose a category</option>
                <option value="Kids">Kids Ministry</option>
                <option value="Youth">Youth Ministry</option>
                <option value="Adults">Adults Ministry</option>
                </select>
              <!-- <Input id="category" type="select" class="w-full" bind:value={announcement.category}> -->

              <!-- <Label for="category">Category</Label>
              <Input id="category" type="text" class="w-full" bind:value={announcement.category} /> -->
            </div>
            <div class="flex flex-row items-center align-middle gap-3">
                <Checkbox id="featured" bind:checked={announcement.featured} />
                <Label
                  for="terms"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Featured Announcement
                </Label>
            </div>
          </div>
        </Card.Content>
      </Card.Root>
      <div class="flex items-center justify-center gap-2 md:hidden">
        <Button variant="outline" size="sm" on:click={() => window.history.back()}>Cancel</Button>
        <Button size="sm" on:click={saveAnnouncement}>Save Announcement</Button>
      </div>
    </div>
  {/if}