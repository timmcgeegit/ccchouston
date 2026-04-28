<!-- ccchouston/src/lib/components/Header.svelte -->
<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import Menu from '@lucide/svelte/icons/menu';

	let mobileOpen = $state(false);

	type NavLink = { label: string; href: string };
	type NavGroup = { label: string; links: NavLink[] };

	const mobileNav: NavGroup[] = [
		{
			label: 'Join Us Sunday',
			links: [
				{ label: 'Plan a Visit', href: '/plan-visit' },
				{ label: 'Connect Card', href: '/connect-card' },
				{ label: 'Join Online', href: '/join-online' }
			]
		},
		{
			label: 'About Us',
			links: [
				{ label: 'About', href: '/about' },
				{ label: 'Our History', href: '/our-history' },
				{ label: 'Become a Member', href: '/become-a-member' }
			]
		},
		{
			label: 'Get Involved',
			links: [
				{ label: 'Adult Ministries', href: '/adults' },
				{ label: 'Kids Ministry', href: '/kids' },
				{ label: 'Youth Ministry', href: '/youth' },
				{ label: 'Missions', href: '/missions' },
				{ label: 'Serve', href: '/serve' }
			]
		},
		{
			label: 'Sermons & Giving',
			links: [
				{ label: 'Sermons', href: '/sermons' },
				{ label: 'Give', href: '/give' }
			]
		},
		{
			label: 'More',
			links: [
				{ label: 'Calendar', href: '/calendar' },
				{ label: 'Blog', href: '/blog' },
				{ label: 'Contact Us', href: '/contact' },
				{ label: 'Prayer Request', href: '/prayer-request' },
				{ label: 'Announcements', href: '/announcements' }
			]
		}
	];

	function handleLinkClick() {
		mobileOpen = false;
	}
</script>

<header class="border-b-2">
	<nav class="bg-background-alt text-foreground px-4 py-8" aria-label="Primary">
		<div class="container mx-auto flex items-center justify-between">
			<div>
				<a href="/"
					><img
						src="/ccclogo.webp"
						class="h-auto max-w-[200px]"
						alt="Calvary Community Church in Copperfield Houston Texas Logo"
					/></a
				>
			</div>
			<div class="flex flex-row items-center gap-4 text-nowrap">
				<ul class=" hidden flex-row gap-8 pt-1 lg:flex">
					<li class="border-animate relative">
						<HoverCard.Root openDelay={300}>
							<HoverCard.Trigger class="hover:text-primary">Join Us Sunday</HoverCard.Trigger>
							<HoverCard.Content class="mt-3 translate-x-16">
								<div class="container flex flex-col space-y-2 px-0">
									<a
										href="/plan-visit"
										class="text-foreground hover:text-primary active:text-primary mx-4 transition-all duration-300"
										>Plan your visit</a
									>
									<a
										href="/connect-card"
										class="text-foreground hover:text-primary active:text-primary mx-4 transition-all duration-300"
										>Connect Card</a
									>
									<a
										href="/join-online"
										class="text-foreground hover:text-primary active:text-primary mx-4 transition-all duration-300"
										>Join Online</a
									>
								</div>
							</HoverCard.Content>
						</HoverCard.Root>
					</li>
					<li class="border-animate relative">
						<HoverCard.Root openDelay={300}>
							<HoverCard.Trigger class="hover:text-primary">About Us</HoverCard.Trigger>
							<HoverCard.Content class="mt-3 translate-x-16">
								<div class="container flex flex-col space-y-2 px-0">
									<a
										href="/about"
										class="text-foreground hover:text-primary active:text-primary mx-4 transition-all duration-300"
										>About</a
									>
									<a
										href="/our-history"
										class="text-foreground hover:text-primary active:text-primary mx-4 transition-all duration-300"
										>Our History</a
									>
									<a
										href="/become-a-member"
										class="text-foreground hover:text-primary active:text-primary mx-4 transition-all duration-300"
										>Become a Member</a
									>
								</div>
							</HoverCard.Content>
						</HoverCard.Root>
					</li>
					<li class="border-animate relative">
						<HoverCard.Root openDelay={300}>
							<HoverCard.Trigger class="hover:text-primary">Get Involved</HoverCard.Trigger>
							<HoverCard.Content class="mt-3 translate-x-16">
								<div class="container flex flex-col space-y-2 px-0">
									<a
										href="/adults"
										class="text-foreground hover:text-primary active:text-primary mx-4 transition-all duration-300"
										>Adult Ministries</a
									>
									<a
										href="/kids"
										class="text-foreground hover:text-primary active:text-primary mx-4 transition-all duration-300"
										>Kids Ministry</a
									>
									<a
										href="/youth"
										class="text-foreground hover:text-primary active:text-primary mx-4 transition-all duration-300"
										>Youth Ministry</a
									>
									<a
										href="/missions"
										class="text-foreground hover:text-primary active:text-primary mx-4 transition-all duration-300"
										>Missions</a
									>
									<a
										href="/calendar"
										class="text-foreground hover:text-primary active:text-primary mx-4 transition-all duration-300"
										>Calendar</a
									>
								</div>
							</HoverCard.Content>
						</HoverCard.Root>
					</li>
					<li class="border-animate relative">
						<a href="/sermons" class="text-foreground hover:text-primary active:text-primary"
							>Sermons</a
						>
					</li>
					<li class="border-animate relative">
						<a href="/give" class="text-foreground hover:text-primary active:text-primary">Give</a>
					</li>
				</ul>
				<div class="ml-5 lg:hidden">
					<Sheet.Root bind:open={mobileOpen}>
						<Sheet.Trigger class="flex items-center pt-3" aria-label="Open mobile navigation">
							<Menu />
						</Sheet.Trigger>
						<Sheet.Content>
							<Sheet.Header>
								<Sheet.Title class="text-h4 tracking-wide">Menu</Sheet.Title>
							</Sheet.Header>
							<nav aria-label="Mobile" class="overflow-y-auto px-4 pb-8">
								<ul class="space-y-6">
									{#each mobileNav as group (group.label)}
										<li>
											<h2
												class="text-caption text-muted-foreground mb-2 font-semibold tracking-wider uppercase"
											>
												{group.label}
											</h2>
											<ul class="space-y-1">
												{#each group.links as link (link.href)}
													<li>
														<a
															href={link.href}
															onclick={handleLinkClick}
															class="text-foreground hover:text-primary block py-2 text-lg transition-colors duration-200"
															>{link.label}</a
														>
													</li>
												{/each}
											</ul>
										</li>
									{/each}
								</ul>
							</nav>
						</Sheet.Content>
					</Sheet.Root>
				</div>
			</div>
		</div>
	</nav>
</header>

<style>
	.border-animate::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 0;
		height: 2px;
		background-color: var(--color-primary);
		transition: width 0.5s ease-in-out;
	}

	.border-animate:hover::after {
		width: 100%;
	}
</style>
