<!-- ccchouston/src/routes/login/+page.svelte -->
<script lang="ts">
import Login from "$lib/components/admin/Login.svelte"
import isLoggedIn from '$lib/components/admin/Login.svelte';


</script>

{#if isLoggedIn}
<div class="my-10 text-center items-center text-xl font-bold">You are logged in</div>
{:else}
<span><div class="my-10"> <Login /></div></span>
{/if}

