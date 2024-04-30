<!-- ccchouston/src/routes/+layout.svelte -->
<script>import "../app.pcss";
import Header from "$lib/components/header.svelte";
import Topbar from "$lib/components/topbar.svelte";
// import isLoggedIn from '$lib/components/admin/Login.svelte';
import { Badge } from "$lib/components/ui/badge";
import { onMount } from 'svelte';
import { supabase } from '$lib/supabaseClient';
import { user } from '$lib/stores/user';
import Footer from "$lib/components/Footer.svelte";

let isLoggedIn = false;

onMount(async () => {
  const session = await supabase.auth.getSession();
  isLoggedIn = session.data.session !== null;

  if (isLoggedIn) {
    // Get the logged-in user's data
    const { data: { user: userData }, error } = await supabase.auth.getUser();

    if (error) {
      console.error('Error fetching user data:', error.message);
      // Handle the error appropriately (e.g., display an error message)
    } else {
      // Store the user's data in the writable store
      user.set(userData);
    }
  }
});
</script>
<Topbar />
<Header />

<slot></slot>
<Footer />
<div class="absolute top-0 p-2 flex flex-row gap-2">
    {#if isLoggedIn}
    <Badge>Logged In</Badge>
    {#if $user}
      <div class="flex flex-row gap-2">
        <p>Email: {$user.email}</p>
        <p>Role: {$user.role}</p>
        <!-- Display other user data as needed -->
      </div>
      
    {/if}
  {:else}
    <span>Not Logged In</span>
  {/if}
</div>
