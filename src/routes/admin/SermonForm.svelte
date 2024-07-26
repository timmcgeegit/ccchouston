<!-- src/routes/admin/SermonForm.svelte -->
<script lang="ts">
    import { superForm } from 'sveltekit-superforms/client';
    import { Button } from '$lib/components/ui/button';
    import * as Card from '$lib/components/ui/card';
    import { Input } from '$lib/components/ui/input';
    import { Textarea } from '$lib/components/ui/textarea';
    import { Checkbox } from '$lib/components/ui/checkbox';
    import { Label } from '$lib/components/ui/label';
    import SuperDebug from 'sveltekit-superforms';
    import { sermonSchema } from '$lib/schemas/sermon';
    import { zod } from 'sveltekit-superforms/adapters';
  
    export let data;
  
    const { form, errors, enhance } = superForm(data.form, {
      resetForm: true,
      validators: zod(sermonSchema),
      onSubmit: ({ formData }) => {
        // Populate form fields
        formData.set('sermon_title', $form.sermon_title);
        formData.set('sermon_description', $form.sermon_description);
        formData.set('sermon_date', $form.sermon_date);
        formData.set('sermon_pdf', $form.sermon_pdf);
        formData.set('sermon_notes', $form.sermon_notes);
        formData.set('sermon_transcript', $form.sermon_transcript);
        formData.set('sermon_audio', $form.sermon_audio);
        formData.set('sermon_video', $form.sermon_video);
        formData.set('sermon_series', $form.sermon_series);
        formData.set('sermon_graphic', $form.sermon_graphic);
        formData.set('sermon_teacher', $form.sermon_teacher);
      },
    });
</script>
  
<SuperDebug data={$form} />
  
<form method="POST" use:enhance>
    <!-- Form fields -->
    <Card.Root>
      <Card.Header>
        <Card.Title>Sermon Details</Card.Title>
      </Card.Header>
      <Card.Content>
        <div class="grid gap-6">
          <!-- Title field -->
          <div class="grid gap-3">
            <Label for="sermon_title">Title</Label>
            <Input id="sermon_title" type="text" class="w-full" bind:value={$form.sermon_title} />
            {#if $errors.sermon_title}<span class="text-red-500">{$errors.sermon_title}</span>{/if}
          </div>
  
          <!-- Description field -->
          <div class="grid gap-3">
            <Label for="sermon_description">Description</Label>
            <Textarea id="sermon_description" bind:value={$form.sermon_description} class="min-h-32" />
            {#if $errors.sermon_description}<span class="text-red-500">{$errors.sermon_description}</span>{/if}
          </div>
  
          <!-- Other fields -->
          <!-- ... -->
  
          <!-- Teacher field -->
          <div class="grid gap-3">
            <Label for="sermon_teacher">Teacher</Label>
            <Input id="sermon_teacher" type="text" class="w-full" bind:value={$form.sermon_teacher} />
            {#if $errors.sermon_teacher}<span class="text-red-500">{$errors.sermon_teacher}</span>{/if}
          </div>
  
          <!-- Series field -->
          <div class="grid gap-3">
            <Label for="sermon_series">Series</Label>
            <Input id="sermon_series" type="text" class="w-full" bind:value={$form.sermon_series} />
            {#if $errors.sermon_series}<span class="text-red-500">{$errors.sermon_series}</span>{/if}
          </div>
        </div>
      </Card.Content>
    </Card.Root>
  
    <div class="flex my-5 justify-end gap-2">
      <Button variant="outline" size="sm" on:click={() => window.history.back()}>Cancel</Button>
      <Button size="sm" type="submit">Save Sermon</Button>
    </div>
</form>