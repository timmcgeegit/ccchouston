<!-- ccchouston/src/lib/components/admin/Login.svelte -->
<!-- ccchouston/src/lib/components/admin/Login.svelte -->
<script lang="ts">
  import { supabase } from '$lib/supabaseClient';
  import { writable } from 'svelte/store';
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";

  export const isLoggedIn = writable(false);

  let email = '';
  let password = '';

  async function handleLogin() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Login error:', error.message);
      // Handle the error appropriately (e.g., display an error message)
    } else {
      console.log('User logged in:', data.user);
      isLoggedIn.set(true);
      // Redirect the user to a protected page or update the UI accordingly
    }
  }
</script>

<Card.Root class="mx-auto max-w-sm">
  <Card.Header>
    <Card.Title class="text-2xl">Login</Card.Title>
    <Card.Description>Enter your email and password below to login to your account</Card.Description>
  </Card.Header>
  <Card.Content>
    <form on:submit|preventDefault={handleLogin} class="grid gap-4">
      <div class="grid gap-2">
        <Label for="email">Email</Label>
        <Input id="email" type="email" bind:value={email} placeholder="m@example.com" required />
      </div>
      <div class="grid gap-2">
        <div class="flex items-center">
          <Label for="password">Password</Label>
          <a href="##" class="ml-auto inline-block text-sm underline">
            Forgot your password?
          </a>
        </div>
        <Input id="password" type="password" bind:value={password} required />
      </div>
      <Button type="submit" class="w-full">Login</Button>
    </form>
    <div class="mt-4 text-center text-sm">
      Don't have an account?
      <a href="##" class="underline"> Sign up </a>
    </div>
  </Card.Content>
</Card.Root>