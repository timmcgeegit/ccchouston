<!-- ccchouston/src/routes/admin/sermons/[id]/+page.svelte -->
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
    import { sermonSchema } from '$lib/schemas/sermon'; // replace announcementSchema with sermonSchema
    import { zod } from 'sveltekit-superforms/adapters';
  
    export let data: PageData;
    console.log('Data prop:', data);
    
    const { form, errors, enhance } = superForm(data.form, {
      resetForm: true,
      validators: zod(sermonSchema), // replace announcementSchema with sermonSchema
      onSubmit: ({ formData }) => {
        // Populate all form fields in the FormData object