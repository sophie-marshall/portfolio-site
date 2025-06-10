<script lang="ts">
	import { page } from '$app/stores';
	import type { Project } from '$lib/types';

	import { constructImageUrl } from '$lib/utils';

	const project: Project = $page.data.project;
</script>

<main>
	<img class="hero" src={constructImageUrl(project.hero_image)} alt={project.title} />
	<div class="content-container">
		{#each project.content as contentBlock}
			{#if contentBlock.value.type === 'text'}
				{@html contentBlock.value.text}
			{/if}
		{/each}
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
