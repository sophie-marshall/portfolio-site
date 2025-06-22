<script lang="ts">
	import type { Message } from '$lib/types';

	let { message } = $props<{ message: Message }>();
</script>

<div class="message {message.role}">
	{#if message.role === 'user'}
		<div class="user-message">
			{message.text}
		</div>
	{:else}
		<div class="assistant-message">
			{message.text}
		</div>
	{/if}
</div>

<style>
	.message {
		display: flex;
		width: fit-content;
		color: black;
		padding: 5px;
		border-radius: 4px;
		max-width: 70%;
	}
	.message.user {
		background: lightblue;
		align-self: flex-end;
	}

	.message.assistant {
		background: lightgreen;
	}
</style>
