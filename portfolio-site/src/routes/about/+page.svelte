<script lang="ts">
	import IdentificationCard from '$lib/components/IdentificationCard.svelte';
</script>

<main>
	<div class="model-container">
		<IdentificationCard />
	</div>
	<div class="text">This is text</div>
</main>

<style>
	main {
		display: flex;
		padding-top: 50px;
		gap: 30px;
	}

	.model-container {
		width: 50vw;
		height: 100vh;
		position: relative;
	}
</style>
