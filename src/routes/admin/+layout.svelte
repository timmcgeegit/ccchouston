<!-- src/routes/admin/+layout.svelte: -->
<script lang="ts">
  import { page } from '$app/stores';
  import { AdminTabs } from '$lib/components/AdminTabs.svelte';

  $: activeTab = $page.url.pathname.split('/').pop();
</script>

<div class="admin-layout">
  <header>
    <h1>Admin Dashboard</h1>
    <AdminTabs {activeTab} />
  </header>

  <main>
    <slot />
  </main>
</div>

<style>
  .admin-layout {
    /* Add your layout styles here */
  }
</style>