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
		padding-top: 50px;
		align-items: center;
		position: sticky;
		top: 0;
		z-index: 99;
	}

	.header img {
		height: 28px;
	}
</style>
