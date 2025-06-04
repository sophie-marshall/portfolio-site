<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let isVisible = false;

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	function handleScroll() {
		isVisible = window.scrollY > 100;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

{#if isVisible}
	<button
		class="to-top-button"
		on:click={scrollToTop}
		transition:fade={{ duration: 200 }}
		aria-label="Scroll to top"
	>
		<img src="/images/arrow-black.png" alt="Top" />
	</button>
{/if}

<style>
	.to-top-button {
		height: 60px;
		width: 60px;
		border-radius: 50%;
		background: white;
		position: fixed;
		bottom: 25px;
		right: 25px;
		transition: background 0.2s ease;
		transform: rotate(180deg);
	}

	.to-top-button:hover {
		background: rgba(255, 255, 255, 0.315);
		color: white;
		filter: invert(0.5);
	}
</style>
