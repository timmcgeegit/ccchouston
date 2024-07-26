<script lang="ts">
  import { announcements, deleteAnnouncement } from '$lib/stores/announcements';
  import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '$lib/components/ui/table';
  import { Button } from '$lib/components/ui/button';
  import type { Announcement } from '$lib/types/announcements';

  async function handleDelete(id: number) {
    await deleteAnnouncement(id);
  }
</script>

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Title</TableHead>
      <TableHead>Category</TableHead>
      <TableHead>Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {#each $announcements as announcement}
      <TableRow>
        <TableCell>{announcement.title}</TableCell>
        <TableCell>{announcement.category}</TableCell>
        <TableCell>
          <Button variant="outline" size="sm" on:click={() => window.location.href = `/admin/announcements/${announcement.id}`}>
            Edit
          </Button>
          <Button variant="outline" size="sm" color="red" on:click={() => handleDelete(announcement.id)}>
            Delete
          </Button>
        </TableCell>
      </TableRow>
    {/each}
  </TableBody>
</Table>