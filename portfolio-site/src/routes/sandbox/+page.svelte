<script lang="ts">
	import { sampleProject } from '$lib/data/project_sandbox';
</script>

<main class="project-page">
	<div class="page-header">
		<span class="base-page">work/<span class="current-page">{sampleProject.slug}</span></span>
		<div class="subtitle">{sampleProject.subtitle}</div>
	</div>
	<img src={sampleProject.hero_image} alt="Project Hero" />
	<div class="overview">
		<div class="overview-left">
			<div class="problem">
				<h4>Problem</h4>
				<p>{@html sampleProject.problem}</p>
			</div>
			<div class="approach">
				<h4>Approach</h4>
				<p>{@html sampleProject.approach}</p>
			</div>
		</div>
		<div class="overview-right">
			<div class="stack">
				<h4>Tech Stack</h4>
				<div class="stack-tags">
					{#each sampleProject.stack as stackItem}
						<span class={`${stackItem.toLowerCase()}-tag`}>{stackItem}</span>
					{/each}
				</div>
			</div>
			<div class="repo">
				<h4>Repo</h4>
				<a href={sampleProject.external_link} target="_blank" rel="noopener noreferrer">
					{sampleProject.external_link}
				</a>
			</div>
		</div>
	</div>
</main>

<style>
	.project-page {
		padding: 50px 0;
		gap: 20px;
	}

	.page-header {
		display: flex;
		flex-direction: column;
		gap: 10px;
		font-size: 24px;
		padding-bottom: 20px;
	}

	.base-page {
		color: grey;
	}

	.current-page {
		color: white;
	}

	.subtitle {
		font-weight: 500;
		font-size: 32px;
	}

	.overview {
		display: flex;
		gap: 30px;
	}

	.overview-left {
		display: flex;
		flex-direction: column;
		flex: 3;
	}

	.overview-right {
		display: flex;
		flex-direction: column;
		flex: 2;
	}

	.stack {
		display: flex;
		flex-direction: column;
	}

	.stack-tags {
		display: flex;
		gap: 5px;
	}

	img {
		display: flex;
		width: 100%;
	}
</style>
