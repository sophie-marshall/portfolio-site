<script lang="ts">
	import Project from '$lib/components/Project.svelte';
	import { onMount } from 'svelte';

	// create an array of sample projects
	const sampleProjects = Array.from({ length: 8 }, (_, i) => ({
		name: `Sample Project ${i + 1}`,
		thumbnail: '/images/stock-image.png'
	}));

	let headline: HTMLElement;
	let projectsContainer: HTMLElement;
	let opacity = 1;

	function handleScroll() {
		const scrollPosition = window.scrollY;
		const fadeStart = 0;
		const fadeEnd = 300;

		if (scrollPosition <= fadeStart) {
			opacity = 1;
		} else if (scrollPosition >= fadeEnd) {
			opacity = 0;
		} else {
			opacity = 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
		}
	}

	function handleArrowClick() {
		const headerBottom = headline.offsetHeight;
		window.scrollTo({ top: headerBottom, behavior: 'smooth' });
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<main>
	<div class="headline" bind:this={headline} style:opacity>
		<h1>Howdy I'm <code>sophie</code> - An engineer driven by curiosity, interested in data</h1>
		<button on:click={handleArrowClick}>
			<img class="down-arrow" src="/svgs/down-arrow.svg" alt="arrow" />
		</button>
	</div>
	<div class="projects-container" bind:this={projectsContainer}>
		{#each sampleProjects as project}
			<Project projectName={project.name} thumbnail={project.thumbnail} />
		{/each}
	</div>
</main>

<style>
	.headline {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 100px;
		padding-top: 150px;
		padding-bottom: 50px;
		position: sticky;
		top: 0;
	}
	.projects-container {
		display: grid;
		background: black;
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
		position: relative;
	}

	.down-arrow {
		display: flex;
		width: 50px;
		height: 50px;
	}

	h1 {
		font-size: 40px;
		text-align: center;
		font-weight: 400;
	}

	button {
		background: transparent;
		border: none;
		cursor: pointer;
	}
</style>
