<script lang="ts">
	let { projectName, thumbnail } = $props<{
		projectName: string;
		thumbnail?: string;
	}>();
</script>

<div class="project">
	<div class="thumbnail-container">
		<img class="thumbnail" src={thumbnail} alt="Project thumbnail" />
		<div class="overlay">
			<h2>{projectName}</h2>
		</div>
	</div>
</div>

<style>
	.thumbnail-container {
		aspect-ratio: 4/3;
		overflow: hidden;
		position: relative;
	}

	.thumbnail {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		opacity: 0;
	}

	.thumbnail-container:hover .overlay {
		opacity: 1;
	}
</style>
