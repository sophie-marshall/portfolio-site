<script lang="ts">
	import NavBar from './NavBar.svelte';
</script>

<div class="header">
	<NavBar />
	<img src="/images/favicon.png" alt="favicon" />
</div>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.header img {
		height: 28px;
	}
</style>
