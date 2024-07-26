<!-- ccchouston/src/routes/admin/+page.svelte I am providing this as an example of how the connection is currently working correctly. Everything on this page is working -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { fetchAnnouncements, fetchSermons, fetchBlogPosts } from '$lib/stores/adminData';

  onMount(async () => {
    await fetchAnnouncements();
    await fetchSermons();
    await fetchBlogPosts();
  });
</script>

<div class="admin-page">
  <h2>Welcome to the Admin Dashboard</h2>
  <p>Select a tab above to manage your content.</p>
</div>

<style>
  .admin-page {
    /* Add your page styles here */
  }
</style>