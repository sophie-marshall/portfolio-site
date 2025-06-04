<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import ToTopButton from '$lib/components/ToTopButton.svelte';
</script>

<main>
	<Header />
	<slot />
	<ToTopButton />
</main>
