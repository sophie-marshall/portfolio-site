<script lang="ts">
	import { sampleProject } from '$lib/data/project_sandbox';
	import { page } from '$app/stores';
	import type { Project } from '$lib/types';
	import ResumeRag from '$lib/components/ResumeRag.svelte';

	const project: Project = $page.data.project;
</script>

<main class="work-page">
	<div class="page-header">
		<span class="base-page">work/<span class="current-page">{project.meta.slug}</span></span>
		<div class="subtitle">{project.subtitle}</div>
	</div>
	<div class="overview">
		<div class="overview-left">
			<div class="problem">
				<h4>Problem</h4>
				<p>{@html project.problem}</p>
			</div>
			<div class="approach">
				<h4>Approach</h4>
				<p>{@html project.approach}</p>
			</div>
		</div>
		<div class="overview-right">
			<div class="stack">
				<h4>Tech Stack</h4>
				<div class="stack-tags">
					{#each project.tags as tag}
						<span class={`${tag.toLowerCase()}-tag`}>
							{tag}
						</span>
					{/each}
				</div>
			</div>
			<div class="repo">
				<h4>Repo</h4>
				<a href={project.external_link} target="_blank" rel="noopener noreferrer">
					{project.external_link}
				</a>
			</div>
			<!-- <div class="demo">
				<h4>Demo</h4>
				<ResumeRag />
			</div> -->
		</div>
	</div>
</main>

<style>
	.work-page {
		padding: 50px 0;
		gap: 20px;
	}

	.work-page h4 {
		font-size: 20px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	.work-page p {
		font-size: 16px;
	}

	.page-header {
		display: flex;
		flex-direction: column;
		gap: 10px;
		font-size: 24px;
		padding-bottom: 20px;
	}

	.base-page {
		color: #999;
		font-size: 14px;
	}

	.current-page {
		color: white;
	}

	.subtitle {
		font-weight: 700;
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

	.demo {
		display: flex;
		flex-direction: column;
		flex: 1;
		margin-top: auto;
	}
</style>
