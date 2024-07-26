<script>
    import { Router, Route } from 'svelte-routing';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import Announcements from '$lib/components/Announcements.svelte';
    import Login from '/Login.svelte';
    import Dashboard from './Dashboard.svelte';
  
    // This creates a writable store with an initial value of 'false'
    export const isLoggedIn = writable(false);
  
    let user;
  
    onMount(async () => {
      // Check if the user is logged in
      // This is a placeholder, replace it with your actual authentication check
      user = await checkIfUserIsLoggedIn();
  
      if (user) {
        isLoggedIn.set(true);
      } else {
        isLoggedIn.set(false);
      }
    });
  </script>
  
  <Router>
    {#if $isLoggedIn}
      <Route path="admin/announcements" let:params component={Announcements} />
      <Route path="admin/dashboard" let:params component={Dashboard} />
    {:else}
      <Route path="admin/login" let:params component={Login} />
    {/if}
  </Router>