<!-- src/lib/components/TeamMember.svelte -->
<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Dialog from '$lib/components/ui/dialog';
	import type { TeamMember } from '$lib/types/teammember';

	interface Props {
		member: TeamMember;
	}

	let { member }: Props = $props();
</script>

<Card.Root
	class="h-full overflow-hidden rounded-lg pb-3 shadow-lg transition-all duration-500 ease-in-out hover:shadow-xl"
>
	<div class="aspect-w-1 aspect-h-1 mb-6">
		<img src={member.image} alt={member.alt_text} class="w-full rounded object-cover" />
	</div>
	<Card.Header class="mb-3 py-0 text-left">
		<Card.Title class="border-primary text-h4 border-l-4 py-1 pl-3 tracking-wide">
			{member.name}
		</Card.Title>
		<Card.Description class="pl-4">{member.position}</Card.Description>
	</Card.Header>
	<Card.Content>
		{#if member.bio}
			<Dialog.Root>
				<Dialog.Trigger class="text-primary border-primary text-caption ml-4 border-b-2">
					Read Bio
				</Dialog.Trigger>
				<Dialog.Content>
					<Dialog.Header>
						<Dialog.Title>
							{member.name}<span class="font-normal">, {member.position}</span>
						</Dialog.Title>
						<Dialog.Description>
							<div class="bio space-y-2">{@html member.bio}</div>
							{#if member.email || member.phone_extension}
								<div class="text-muted-foreground mt-4 space-y-1 text-sm">
									{#if member.email}
										<p>
											<a
												href="mailto:{member.email}"
												class="hover:text-primary underline-offset-4 hover:underline"
											>
												{member.email}
											</a>
										</p>
									{/if}
									{#if member.phone_extension}
										<p>Ext. {member.phone_extension}</p>
									{/if}
								</div>
							{/if}
						</Dialog.Description>
					</Dialog.Header>
				</Dialog.Content>
			</Dialog.Root>
		{/if}
	</Card.Content>
</Card.Root>
