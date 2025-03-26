<script lang="ts">
</script>

<div class="navigation-menu">
	<a class="nav-menu-page-title" href="/about">
		<img class="nav-menu-about" src="/svgs/about.svg" alt="ABOUT" />
	</a>
	<a class="nav-menu-page-title" href="/projects">
		<img class="nav-menu-projects" src="/svgs/projects.svg" alt="PROJECTS" />
	</a>
	<a class="nav-menu-page-title" href="/contact">
		<img class="nav-menu-contact" src="/svgs/contact.svg" alt="CONTACT" />
	</a>
</div>

<style>
	.navigation-menu {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		font-size: 64px;
	}
	.nav-menu-page-title {
		color: var(--secondary-purple);
	}

	.nav-menu-about:hover {
		margin-top: -10px; /* TODO: find a better way to get this to work */
		content: url('/svgs/about-hover.svg');
	}

	.nav-menu-projects:hover {
		content: url('/svgs/projects-hover.svg');
		margin-top: -10px; /* TODO: find a better way to get this to work */
	}

	.nav-menu-contact:hover {
		content: url('/svgs/contact-hover.svg');
		margin-top: -10px; /* TODO: find a better way to get this to work */
	}

	.strikethrough-line {
		position: relative;
		border: 0.25px solid var(--accent-purple);
		width: 100%;
	}

	a {
		text-decoration: none;
	}
</style>
