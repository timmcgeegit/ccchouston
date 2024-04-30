<!-- ccchouston/src/routes/admin/announcements/[id]/+page.svelte -->
<script lang="ts">
  import type { PageData } from './$types';
  import { superForm, type SuperValidated } from 'sveltekit-superforms/client';
  import { Button } from '$lib/components/ui/button';
  import * as Card from '$lib/components/ui/card';
  import { Input } from '$lib/components/ui/input';
  import { Textarea } from '$lib/components/ui/textarea';
  import { Checkbox } from '$lib/components/ui/checkbox';
  import { Label } from '$lib/components/ui/label';
  import SuperDebug from 'sveltekit-superforms';
  import { announcementSchema } from '$lib/schemas/announcement';
  import { zod } from 'sveltekit-superforms/adapters';

  export let data: PageData;
  console.log('Data prop:', data);
  
  const { form, errors, enhance } = superForm(data.form, {
    resetForm: true,
    validators: zod(announcementSchema),
    onSubmit: ({ formData }) => {
      // Populate all form fields in the FormData object
      formData.set('id', $form.id);
      formData.set('title', $form.title);
      formData.set('img_square', $form.img_square);
      formData.set('img_16x9', $form.img_16x9);
      formData.set('description', $form.description);
      formData.set('featured', $form.featured);
      formData.set('category', $form.category);
      formData.set('link', $form.link);
    },
  });
</script>

<SuperDebug data={$form} />

<div class="mx-auto grid my-5 max-w-[59rem] flex-1 auto-rows-max gap-4">
  <!-- ... -->
  <form method="POST" use:enhance>
    <input type="hidden" name="id" value={$form.id} />
    <input type="hidden" name="img_16x9" value={$form.img_16x9} />
    <div class="flex my-5 justify-end gap-2">
      <Button variant="outline" size="sm" on:click={() => window.history.back()}>Cancel</Button>
      <Button size="sm" type="submit">Save Announcement</Button>
    </div>
    <Card.Root>
      <Card.Header>
        <Card.Title>Announcement Details</Card.Title>
      </Card.Header>
      <Card.Content>
        <div class="grid gap-6">
          <div class="grid gap-3">
            <Label for="title">Title</Label>
            <Input id="title" type="text" class="w-full" bind:value={$form.title} />
            {#if $errors.title}<span class="text-red-500">{$errors.title}</span>{/if}
          </div>
          <div class="grid gap-3">
            <Label for="description">Description</Label>
            <Textarea id="description" bind:value={$form.description} class="min-h-32" />
          </div>
          <div class="grid gap-3">
            <Label for="img_square">Square Image</Label>
            <Input id="img_square" type="text" class="w-full" bind:value={$form.img_square} />
          </div>
          <div class="grid gap-3">
            <Label for="link">Link</Label>
            <Input id="link" type="text" class="w-full" bind:value={$form.link} />
          </div>
          <div class="grid gap-3">
            <Label for="category">Category</Label>
            <select class="w-50% py-1 rounded px-3 border-2" name="category" id="category" bind:value={$form.category}>
              <option value="">Choose a category</option>
              <option value="kids">Kids Ministry</option>
              <option value="youth">Youth Ministry</option>
              <option value="adults">Adults Ministry</option>
            </select>
          </div>
          <!-- ... -->
          <div class="flex flex-row items-center align-middle gap-3">
            <Checkbox id="featured" bind:checked={$form.featured} />
            <Label for="featured" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Featured Announcement
            </Label>
          </div>
        </div>
      </Card.Content>
    </Card.Root>
  </form>
</div>