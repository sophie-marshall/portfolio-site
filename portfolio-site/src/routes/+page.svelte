<script lang="ts">
	import { page } from '$app/stores';
	import Project from '$lib/components/Project.svelte';
	import type { ProjectIndexItem } from '$lib/types';
	import { onMount } from 'svelte';

	const projectIndex: ProjectIndexItem[] = $page.data.projectIndex;

	console.log(projectIndex);

	let headline: HTMLElement;
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
		const headerBottom = headline.offsetHeight - 50;
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
		<h1>
			<span class="nowrap">Howdy 🤠</span> I'm Sophie -- An engineer driven by
			<span class="span-nowrap">curiosity 🔬</span>, interested in data, living in
			<span class="span-nowrap">📍 Washington, DC</span>
		</h1>
		<button on:click={handleArrowClick}>
			<img class="down-arrow" src="/images/arrow-white.png" alt="arrow" />
		</button>
	</div>
	<div class="projects-container">
		{#each projectIndex as project}
			<Project {project} />
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
		width: 25px;
		height: 25px;
	}

	.headline h1 {
		font-size: 50px;
		text-align: center;
		font-weight: 400;
		width: 70%;
		line-height: 125%;
	}

	.headline button {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60px;
		width: 60px;
		border-radius: 50%;
		transition: background 0.3s ease;
	}

	.headline button:hover {
		background: rgba(255, 255, 255, 0.075);
	}
</style>
