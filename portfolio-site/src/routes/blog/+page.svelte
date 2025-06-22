<main class="blog-page">
	<div class="timeline">
		<div class="top">
			<div class="post">This is a blog post</div>
			<div class="post">This is a blog post</div>
		</div>
		<div class="bottom">
			<div class="post">This is a blog post</div>
			<div class="post">This is a blog post</div>
		</div>
	</div>
</main>

<style>
	.timeline {
		display: flex;
		flex-direction: column;
	}

	.top,
	.bottom {
		display: flex;
		gap: 300px;
	}

	.top {
		background: lightcoral;
		border-bottom: 4px solid white;
	}

	.bottom {
		margin-left: 300px;
		background: lightseagreen;
	}

	.post {
		display: flex;
		height: 200px;
		width: 300px;
		border: 0.5px solid black;
	}
</style>
