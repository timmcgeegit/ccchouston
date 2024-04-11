<!-- ccchouston/src/routes/admin/announcements/+page.svelte -->
<script lang="ts">
  import File from "lucide-svelte/icons/file";
  import Home from "lucide-svelte/icons/home";
  import LineChart from "lucide-svelte/icons/line-chart";
  import ListFilter from "lucide-svelte/icons/list-filter";
  import Ellipsis from "lucide-svelte/icons/ellipsis";
  import Package from "lucide-svelte/icons/package";
  import Package2 from "lucide-svelte/icons/package-2";
  import PanelLeft from "lucide-svelte/icons/panel-left";
  import CirclePlus from "lucide-svelte/icons/circle-plus";
  import Search from "lucide-svelte/icons/search";
  import Settings from "lucide-svelte/icons/settings";
  import ShoppingCart from "lucide-svelte/icons/shopping-cart";
  import UsersRound from "lucide-svelte/icons/users-round";

  import { Badge } from "$lib/components/ui/badge/index.js";
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import * as Table from "$lib/components/ui/table/index.js";
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  

  import { onMount } from 'svelte';
  import type { Announcement } from '$lib/types/types';

  let announcements: Announcement[] = [];

  async function fetchAnnouncements() {
    const response = await fetch('/api/announcements');
    announcements = await response.json();
  }

  async function deleteAnnouncement(id: number) {
    await fetch(`/api/announcements`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchAnnouncements();
  }

  onMount(fetchAnnouncements);
</script>

<div class="flex min-h-screen w-full flex-col bg-muted/40">
  <!-- ... (sidebar and header code remains the same) ... -->

  <main class="grid flex-1 my-5 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
    <Tabs.Root value="all">
      <div class="flex items-center">
        <Tabs.List>
          <Tabs.Trigger value="all">All</Tabs.Trigger>
          <Tabs.Trigger value="active">Active</Tabs.Trigger>
          <Tabs.Trigger value="draft">Draft</Tabs.Trigger>
          <Tabs.Trigger value="archived" class="hidden sm:flex">
            Archived
          </Tabs.Trigger>
        </Tabs.List>
        <div class="ml-auto flex items-center gap-2">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild let:builder>
              <Button
                builders={[builder]}
                variant="outline"
                size="sm"
                class="h-7 gap-1"
              >
                <ListFilter class="h-3.5 w-3.5" />
                <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Filter
                </span>
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="end">
              <DropdownMenu.Label>Filter by</DropdownMenu.Label>
              <DropdownMenu.Separator />
              <DropdownMenu.CheckboxItem checked>
                Active
              </DropdownMenu.CheckboxItem>
              <DropdownMenu.CheckboxItem>Draft</DropdownMenu.CheckboxItem>
              <DropdownMenu.CheckboxItem>Archived</DropdownMenu.CheckboxItem>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          <Button size="sm" variant="outline" class="h-7 gap-1">
            <File class="h-3.5 w-3.5" />
            <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
          <Button size="sm" class="h-7 gap-1" on:click={() => window.location.href = '/admin/announcements/new'}>
            <CirclePlus class="h-3.5 w-3.5" />
            <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Announcement
            </span>
            
          </Button>
        </div>
      </div>
      <Tabs.Content value="all">
        <Card.Root>
          <Card.Header>
            <Card.Title>Announcements</Card.Title>
            <Card.Description>
              Manage your announcements and view their details.
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.Head class="hidden w-[100px] sm:table-cell">
                    <span class="sr-only">Image</span>
                  </Table.Head>
                  <Table.Head>Title</Table.Head>
                  <Table.Head>Category</Table.Head>
                  <Table.Head>Featured</Table.Head>
                  <Table.Head class="hidden md:table-cell">Content</Table.Head>
                  <Table.Head>
                    <span class="sr-only">Actions</span>
                  </Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {#each announcements as announcement}
                  <Table.Row>
                    <Table.Cell class="hidden sm:table-cell">
                      <img
                        alt="Announcement image"
                        class="aspect-square rounded-md object-cover"
                        height="64"
                        src={announcement.imageUrl}
                        width="64"
                      />
                    </Table.Cell>
                    <Table.Cell class="font-medium">{announcement.title}</Table.Cell>
                    <Table.Cell>{announcement.category}</Table.Cell>
                    <Table.Cell>
                      {#if announcement.featured}
                        <Badge variant="secondary">Featured</Badge>
                      {:else}
                        <Badge variant="outline">Regular</Badge>
                      {/if}
                    </Table.Cell>
                    <Table.Cell class="hidden md:table-cell">{announcement.content}</Table.Cell>
                    <Table.Cell>
                      <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild let:builder>
                          <Button
                            aria-haspopup="true"
                            size="icon"
                            variant="ghost"
                            builders={[builder]}
                          >
                            <Ellipsis class="h-4 w-4" />
                            <span class="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content align="end">
                          <DropdownMenu.Label>Actions</DropdownMenu.Label>
                          <DropdownMenu.Item on:click={() => window.location.href = `/admin/announcements/${announcement.id}`}>Edit</DropdownMenu.Item>
                          <DropdownMenu.Item on:click={() => deleteAnnouncement(announcement.id)}>Delete</DropdownMenu.Item>
                        </DropdownMenu.Content>
                      </DropdownMenu.Root>
                    </Table.Cell>
                  </Table.Row>
                {/each}
              </Table.Body>
            </Table.Root>
          </Card.Content>
          <Card.Footer>
            <div class="text-xs text-muted-foreground">
              Showing <strong>1-{announcements.length}</strong> of <strong>{announcements.length}</strong> announcements
            </div>
          </Card.Footer>
        </Card.Root>
      </Tabs.Content>
    </Tabs.Root>
  </main>
</div>