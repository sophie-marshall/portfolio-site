<script lang="ts">
	import '../global.css';
	import NavigationMenu from '$lib/NavigationMenu.svelte';

	let { children } = $props();
</script>

<div class="layout">
	<nav>
		<NavigationMenu />
	</nav>
</div>

{@render children()}
