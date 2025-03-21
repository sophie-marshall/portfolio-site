<script lang="ts">
	import '../global.css';

	let { children } = $props();
</script>

<nav>
	<a href="/">HOME</a>
	<a href="/about">ABOUT</a>
</nav>

{@render children()}
