<script lang="ts">
	import Ellipsis from "lucide-svelte/icons/ellipsis";
	import { Badge } from "$lib/components/ui/badge/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Card from "$lib/components/ui/card/index.js";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import * as Table from "$lib/components/ui/table/index.js";
	import type { Announcement } from "$lib/types/types";

	export let announcements: Announcement[];
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Announcements</Card.Title>
		<Card.Description>
			Manage your announcements and view their details.
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="hidden w-[100px] sm:table-cell">
						<span class="sr-only">Image</span>
					</Table.Head>
					<Table.Head>Title</Table.Head>
					<Table.Head>Category</Table.Head>
					<Table.Head>Featured</Table.Head>
					<Table.Head class="hidden md:table-cell">Content</Table.Head>
					<Table.Head>
						<span class="sr-only">Actions</span>
					</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each announcements as announcement}
					<Table.Row>
						<Table.Cell class="hidden sm:table-cell">
							<img
								alt="Announcement image"
								class="aspect-square rounded-md object-cover"
								height="64"
								src={announcement.imageUrl}
								width="64"
							/>
						</Table.Cell>
						<Table.Cell class="font-medium">{announcement.title}</Table.Cell>
						<Table.Cell>{announcement.category}</Table.Cell>
						<Table.Cell>
							{#if announcement.featured}
								<Badge variant="secondary">Featured</Badge>
							{:else}
								<Badge variant="outline">Regular</Badge>
							{/if}
						</Table.Cell>
						<Table.Cell class="hidden md:table-cell">{announcement.content}</Table.Cell>
						<Table.Cell>
							<DropdownMenu.Root>
								<DropdownMenu.Trigger asChild let:builder>
									<Button
										aria-haspopup="true"
										size="icon"
										variant="ghost"
										builders={[builder]}
									>
										<Ellipsis class="h-4 w-4" />
										<span class="sr-only">Toggle menu</span>
									</Button>
								</DropdownMenu.Trigger>
								<DropdownMenu.Content align="end">
									<DropdownMenu.Label>Actions</DropdownMenu.Label>
									<DropdownMenu.Item>Edit</DropdownMenu.Item>
									<DropdownMenu.Item>Delete</DropdownMenu.Item>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</Card.Content>
	<Card.Footer>
		<div class="text-xs text-muted-foreground">
			Showing <strong>1-{announcements.length}</strong> of <strong>{announcements.length}</strong> announcements
		</div>
	</Card.Footer>
</Card.Root>