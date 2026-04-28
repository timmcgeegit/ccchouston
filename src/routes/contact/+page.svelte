<script lang="ts">
	import HeroSection from '$lib/components/design/HeroSection.svelte';
	import SectionTitle from '$lib/components/design/SectionTitle.svelte';
	import { Button } from '$lib/components/ui/button';
	import Mail from '@lucide/svelte/icons/mail';
	import Phone from '@lucide/svelte/icons/phone';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Clock from '@lucide/svelte/icons/clock';

	const ADDRESS = '15551 Mueschke Rd, Cypress, TX 77433';
	const PHONE = '(281) 463-2310';
	const EMAIL = 'info@calvaryhouston.com';
	// TODO confirm Shelby contact form URL with staff before launch.
	const SHELBY_CONTACT_URL = 'https://shelbynextmembership.com';

	type Reason = { id: string; label: string; href: string };

	const reasons: Reason[] = [
		{ id: 'general', label: 'A general question', href: SHELBY_CONTACT_URL },
		{ id: 'visit', label: 'I am planning to visit', href: '/plan-visit' },
		{ id: 'prayer', label: 'I have a prayer request', href: '/prayer-request' },
		{ id: 'membership', label: 'I want to learn about membership', href: '/become-a-member' }
	];
</script>

<main>
	<HeroSection
		pageTitle="Contact Us"
		subtitle="Reach out and someone from our team will get back to you."
		downArrowHref="#info"
	/>

	<section id="info" class="container mx-auto my-20">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
			<div>
				<SectionTitle title="Where We Are" />
				<ul class="text-body space-y-5">
					<li class="flex items-start gap-3">
						<MapPin class="text-primary mt-1 size-5 shrink-0" aria-hidden="true" />
						<div>
							<p class="font-semibold">{ADDRESS}</p>
							<a
								href="https://maps.google.com/?q={encodeURIComponent(ADDRESS)}"
								target="_blank"
								rel="noopener noreferrer"
								class="text-primary text-sm underline-offset-4 hover:underline"
							>
								Get directions
							</a>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<Phone class="text-primary mt-1 size-5 shrink-0" aria-hidden="true" />
						<div>
							<p class="font-semibold">{PHONE}</p>
							<p class="text-muted-foreground text-sm">Monday through Thursday, 9 AM to 4 PM</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<Mail class="text-primary mt-1 size-5 shrink-0" aria-hidden="true" />
						<div>
							<a href="mailto:{EMAIL}" class="font-semibold underline-offset-4 hover:underline">
								{EMAIL}
							</a>
							<p class="text-muted-foreground text-sm">Allow 1 to 2 business days for a reply.</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<Clock class="text-primary mt-1 size-5 shrink-0" aria-hidden="true" />
						<div>
							<p class="font-semibold">Sunday service</p>
							<p>10 AM</p>
						</div>
					</li>
				</ul>
			</div>

			<div>
				<SectionTitle title="What Are You Reaching Out About?" />
				<p class="text-body mb-6">
					Pick the option that fits and we will get you to the right person.
				</p>
				<div class="space-y-3">
					{#each reasons as reason (reason.id)}
						<a
							href={reason.href}
							class="bg-background hover:border-primary border-muted block rounded-lg border-2 p-5 shadow-sm transition-all duration-300 hover:shadow-md"
						>
							<div class="flex items-center justify-between gap-4">
								<span class="text-body font-semibold">{reason.label}</span>
								<span
									class="text-primary transition-transform duration-300 group-hover:translate-x-1"
									>→</span
								>
							</div>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="bg-muted-lighter py-20">
		<div class="container mx-auto max-w-3xl text-center">
			<SectionTitle title="Send a Message" />
			<p class="text-body mb-8">
				If none of the options above fit, or you would rather just write to us, fill out our contact
				form. A staff member will follow up.
			</p>
			<Button
				href={SHELBY_CONTACT_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="px-12 py-7 text-lg font-normal tracking-wide"
			>
				Open Contact Form
			</Button>
			<p class="text-caption text-muted-foreground mt-6">We use Shelby for contact forms today.</p>
		</div>
	</section>
</main>
