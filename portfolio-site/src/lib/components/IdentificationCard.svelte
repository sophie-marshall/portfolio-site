<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
	import { onMount } from 'svelte';

	const modelURL = '/models/test.glb';
	let model: any | null = null;

	async function loadGLTF() {
		const loader = new GLTFLoader();
		model = await loader.loadAsync(modelURL);
	}

	onMount(() => {
		loadGLTF();
	});

	// rotation state
	let idleSpeed = 0.002;
	let velocity = 0;
	let damping = 0.95;
	let isDragging = false;

	// frame loop
	function animate() {
		if (model) {
			if (!isDragging) {
				velocity += idleSpeed * 0.1;
			}
			model.scene.rotation.y += velocity;
			velocity *= damping;
		}
		requestAnimationFrame(animate);
	}

	onMount(() => {
		animate();
	});

	function handleStart() {
		isDragging = true;
	}
	function handleEnd() {
		isDragging = false;
	}
</script>

<div class="identification-card">
	<SC.Canvas background={new THREE.Color('black')}>
		<SC.PerspectiveCamera near={1} far={100} fov={55} position={[0, 0, 10]} />

		{#if model}
			<SC.Primitive object={model.scene} scale={[1, 1, 1]} />
		{/if}

		<SC.DirectionalLight
			color={new THREE.Color('white')}
			intensity={0.75}
			position={[10, 10, 10]}
		/>
		<SC.AmbientLight color={new THREE.Color('white')} intensity={0.5} />

		<SC.OrbitControls
			enabled
			enablePan
			enableZoom
			enableRotate
			enableDamping
			on:start={handleStart}
			on:end={handleEnd}
		/>
	</SC.Canvas>
</div>

<style>
	.identification-card canvas,
	.identification-card .container {
		position: relative !important;
		width: 100% !important;
		height: 100% !important;
	}
</style>
