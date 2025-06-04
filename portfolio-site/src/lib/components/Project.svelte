<script lang="ts">
	let { projectName, thumbnail, slug } = $props<{
		projectName: string;
		thumbnail?: string;
		slug?: string;
	}>();
</script>

<a href="/work/{slug}" class="project">
	<div class="thumbnail">
		<img src={thumbnail} alt="Project thumbnail" />
		<div class="overlay">
			<h2>{projectName.toUpperCase()}</h2>
		</div>
	</div>
</a>

<style>
	.thumbnail {
		aspect-ratio: 4/3;
		overflow: hidden;
		position: relative;
	}

	.thumbnail img {
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

	.overlay h2 {
		font-weight: 500;
	}

	.thumbnail:hover .overlay {
		opacity: 1;
	}
</style>
