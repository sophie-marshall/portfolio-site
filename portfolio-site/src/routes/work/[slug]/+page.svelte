<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import ResumeRag from '$lib/components/ResumeRag.svelte';

	export let data: { project: Project };

	const project: Project = data.project;
</script>

<main>
	<img class="hero" src={project.image} alt={project.title} />
	<div class="content-container">
		{#each project.content ?? [] as content}
			{#if content.type === 'image'}
				<img class="image-content" src={content.image} alt={content.text} />
			{:else}
				<div class="text-content">
					{@html content.text}
				</div>
			{/if}
		{/each}
		{#if project.slug === 'resume-rag'}
			<ResumeRag />
		{/if}
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		margin-top: 50px;
		padding: 0px 20px;
		font-size: 24px;
		line-height: 125%;
	}

	.hero {
		width: 100%;
		padding-bottom: 20px;
	}

	.content-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
	}

	.text-content {
		width: 70%;
	}

	.image-content {
		width: 100%;
	}
</style>
