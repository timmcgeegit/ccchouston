<!-- ccchouston/src/routes/login/+page.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';
    import { supabase } from '$lib/supabaseClient';
    import Login from "$lib/components/admin/Login.svelte";
  
    let isLoggedIn = false;
  
    onMount(async () => {
      const session = supabase.auth.session();
      isLoggedIn = session !== null;
    });
  </script>
  
  {#if isLoggedIn}
    <div class="my-10 text-center items-center text-xl font-bold">You are already logged in</div>
  {:else}
    <div class="my-10"> 
      <Login />
    </div>
  {/if}