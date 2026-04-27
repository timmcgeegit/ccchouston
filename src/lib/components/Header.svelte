<!-- ccchouston/src/lib/components/Header.svelte -->
<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Sheet from '$lib/components/ui/sheet';
	import Menu from '@lucide/svelte/icons/menu';
	import * as HoverCard from '$lib/components/ui/hover-card';
</script>

<header class="border-b-2">
	<nav class="bg-background-alt text-foreground px-4 py-8">
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
						<a href="/about" class="text-foreground hover:text-primary active:text-primary"
							>About Us</a
						>
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
									<!-- <a href="/serve" class="mx-4 text-foreground hover:text-primary active:text-primary transition-all duration-300">Serve</a>   -->
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
						<a href="/about" class="text-foreground hover:text-primary active:text-primary"
							>Sermons</a
						>
					</li>
					<li class="border-animate relative">
						<a href="/about" class="text-foreground hover:text-primary active:text-primary">Give</a>
					</li>
				</ul>
				<div class="ml-5">
					<Sheet.Root>
						<Sheet.Trigger class="items-center pt-3"
							><Menu aria-label="Open Mobile Navigation" /></Sheet.Trigger
						>
						<Sheet.Content>
							<Sheet.Header>
								<Sheet.Title></Sheet.Title>
								<Sheet.Description>
									<ul class="space-y-3 text-lg">
										<li>
											<a
												href="#"
												class="text-foreground hover:text-primary active:text-primary mx-4 transition-all duration-300"
												>About Us</a
											>
										</li>
										<li>
											<a
												href="#"
												class="text-foreground hover:text-primary active:text-primary mx-4 transition-all duration-300"
												>Get Involved</a
											>
										</li>
										<li>
											<a
												href="#"
												class="text-foreground hover:text-primary active:text-primary mx-4 transition-all duration-300"
												>Kids & Youth</a
											>
										</li>
										<li>
											<a
												href="/about"
												class="text-foreground hover:text-primary active:text-primary mx-4 transition-all duration-300"
												>Sermons</a
											>
										</li>
										<li>
											<a
												href="#"
												class="text-foreground hover:text-primary active:text-primary mx-4 transition-all duration-300"
												>Give</a
											>
										</li>
									</ul>
									<Button
										href="/contact"
										class="text my-6 py-6 font-normal tracking-wide transition-all duration-300 hover:shadow-xl"
										>Request Consultation</Button
									>
								</Sheet.Description>
							</Sheet.Header>
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
