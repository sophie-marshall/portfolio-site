<script lang="ts">
	export let data;

	const project = data.project;
</script>

<main>
	<img class="hero" src={project.image} alt={project.title} />
	<div class="content-container">
		{#each project.content as content}
			<div class="content">
				{@html content.text}
			</div>
		{/each}
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		padding-top: 50px;
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

	.content {
		width: 70%;
	}
</style>
