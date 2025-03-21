<script lang="ts">
	import '../global.css';

	let { children } = $props();
</script>

<nav>
	<a href="/">HOME</a>
	<a href="/about">ABOUT</a>
	<a href="/projects">PROJECTS</a>
	<a href="/contact">CONTACT</a>
</nav>

{@render children()}
