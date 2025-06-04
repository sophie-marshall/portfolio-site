<script lang="ts">
</script>

<main>
	<div class="text-content">
		<div class="overview">
			<span>Howdy</span> -- Sophie here! I am a full-time <span>Data Engineer</span>, part-time
			triathlete, and unofficial energy drink connoisseur. I live in Washington DC with my partner
			and our long-haired chihuahua, Penelope!
		</div>
		<div class="professional-summary">
			I'm most passionate about building pipelines that keep emerging technology systems hydrated,
			but I'm always up for exploring new frontiers. I have a strong foundation in <span
				>Python</span
			>,
			<span>SQL</span> and <span>JavaScript</span>, with plans to expand to Java and Rust as the
			data landscape continues to evolve.
		</div>

		<div class="current-position">
			Right now, I work on a <span>R&D</span> team focused on developing and championing
			<span>ML/AI</span> based workflows in public media.
		</div>

		<div class="contact">
			<a href="mailto:sophie.marshall98@gmail.com"><span>sophie.marshall98@gmail.com</span></a>
		</div>
	</div>
	<img src="/images/profile-photo.JPG" alt="Me and some french onion dip!" />
</main>

<style>
	main {
		display: flex;
		padding-top: 50px;
		gap: 30px;
	}

	.text-content {
		display: flex;
		flex-direction: column;
		gap: 50px;
		font-size: 24px;
		line-height: 125%;
	}

	.text-content span {
		color: rgb(133, 27, 255);
	}
	main img {
		display: flex;
		width: 40%;
		height: auto;
		object-fit: contain;
		align-self: flex-start;
	}

	main a {
		text-decoration: none;
	}
</style>
