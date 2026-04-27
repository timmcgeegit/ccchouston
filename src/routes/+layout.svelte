<!-- ccchouston/src/routes/+layout.svelte -->
<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Topbar from '$lib/components/topbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Topbar />
<Header />

<slot></slot>
<Footer />
