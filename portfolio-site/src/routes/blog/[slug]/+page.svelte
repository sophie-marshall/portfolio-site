<script lang="ts">
	import type { Blog } from '$lib/data/blogs';

	export let data: { blog: Blog };

	const blog: Blog = data.blog;
</script>

<main>
	{blog.title}
</main>
