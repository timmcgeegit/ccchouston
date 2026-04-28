<!-- ccchouston/src/routes/+layout.svelte -->
<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Topbar from '$lib/components/topbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import UrgentAnnouncementAlert from '$lib/components/design/UrgentAnnouncementAlert.svelte';
	import FirstVisitAnnouncementModal from '$lib/components/design/FirstVisitAnnouncementModal.svelte';
	import type { LayoutData } from './$types';

	let { data, children }: { data: LayoutData; children: import('svelte').Snippet } = $props();
</script>

<Topbar />
<Header />
{#if data.siteUrgent}
	<UrgentAnnouncementAlert announcement={data.siteUrgent} />
{/if}

{@render children()}
<Footer />

<FirstVisitAnnouncementModal candidates={data.modalCandidates} />
