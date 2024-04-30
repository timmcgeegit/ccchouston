<!-- ccchouston/src/routes/admin/+page.svelte I am providing this as an example of how the connection is currently working correctly. Everything on this page is working -->
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
  import { supabase } from '$lib/supabaseClient';
  import type { Announcement } from '$lib/types/announcements';
  import type { BlogPost } from '$lib/types/blog';

  let activeTab = 'announcements';
  let announcements: Announcement[] = [];
  let blogPosts: BlogPost[] = [];

  async function fetchAnnouncements() {
    const { data, error } = await supabase
      .from('announcements')
      .select('*');

    if (error) {
      console.error('Error fetching announcements:', error);
    } else {
      announcements = data;
    }
  }

  async function fetchBlogPosts() {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*');

    if (error) {
      console.error('Error fetching blog posts:', error);
    } else {
      blogPosts = data;
    }
  }

  async function deleteAnnouncement(id: number) {
  const { error } = await supabase.from('announcements').delete().eq('id', id);
  if (error) {
    console.error('Error deleting announcement:', error);
  } else {
    announcements = announcements.filter((a) => a.id !== id);
  }
}

  async function deleteBlogPost(id: number) {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting blog post:', error);
    } else {
      fetchBlogPosts();
    }
  }

  onMount(() => {
    fetchAnnouncements();
    fetchBlogPosts();
  });
</script>

<div class="flex min-h-screen w-full flex-col bg-muted/40">
  <!-- ... (sidebar and header code remains the same) ... -->

  <main class="grid flex-1 my-5 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
    <Tabs.Root bind:value={activeTab} class="w-full">
      <div class="flex items-center">
        <Tabs.List class="grid grid-cols-3">
          <Tabs.Trigger value="announcements">Announcements</Tabs.Trigger>
          <Tabs.Trigger value="blogPosts">Blog Posts</Tabs.Trigger>
          <Tabs.Trigger value="config">Site Config</Tabs.Trigger>
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
          {#if activeTab === 'announcements'}
              <Button size="sm" class="h-7 gap-1" on:click={() => {
                window.location.href = `/admin/announcements/new`;
              }}>
                <CirclePlus class="h-3.5 w-3.5" />
                <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Announcement
                </span>
              </Button>
          {:else if activeTab === 'blogPosts'}
            <Button size="sm" class="h-7 gap-1" on:click={() => window.location.href = '/admin/blog/new'}>
              <CirclePlus class="h-3.5 w-3.5" />
              <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Blog Post
              </span>
            </Button>
          {:else}
            <div></div>
          {/if}
        </div>
      </div>

      <Tabs.Content value="announcements">
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
                  <Table.Head class="hidden md:table-cell">Description</Table.Head>
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
                        src={announcement.img_square}
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
                    <Table.Cell class="hidden md:table-cell">{announcement.description}</Table.Cell>
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

      <Tabs.Content value="blogPosts">
        <Card.Root>
          <Card.Header>
            <Card.Title>Blog Posts</Card.Title>
            <Card.Description>
              Manage your blog posts and view their details.
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <Table.Root>
              <!-- ... (blog posts table code) ... -->
            </Table.Root>
          </Card.Content>
          <Card.Footer>
            <div class="text-xs text-muted-foreground">
              Showing <strong>1-{blogPosts.length}</strong> of <strong>{blogPosts.length}</strong> blog posts
            </div>
          </Card.Footer>
        </Card.Root>
      </Tabs.Content>

      <Tabs.Content value="config">
        <Card.Root>
          <Card.Header>
            <Card.Title>Site Configuration</Card.Title>
            <Card.Description>
              Manage your site's configuration settings.
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <!-- ... (site config form or settings) ... -->
          </Card.Content>
        </Card.Root>
      </Tabs.Content>
    </Tabs.Root>
   
  </main>
</div>