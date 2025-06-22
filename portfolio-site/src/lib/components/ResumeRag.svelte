<script lang="ts">
	import type { Message } from '$lib/types';
	import MessageBubble from './MessageBubble.svelte';

	let userInput = '';
	let messages: Message[] = [];

	async function sendMessage() {
		// add input to messages array
		messages = [
			...messages,
			{ text: userInput, role: 'user', timestemp: new Date().toISOString() }
		];

		// hit chat endpoing for response
		const res = await fetch('/api/chat', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ userMessage: userInput })
		});

		// handle response
		const assistantResponse = await res.json();
		messages = [
			...messages,
			{
				text: assistantResponse.assistantResponse,
				role: 'assistant',
				timestemp: new Date().toISOString()
			}
		];

		console.log('Messages:', messages); // Replace with your UI logic
		userInput = '';
	}
</script>

<div class="resume-rag">
	<div class="messages-container">
		{#each messages as message}
			<MessageBubble {message} />
		{/each}
	</div>
	<div class="search-bar">
		<input type="text" placeholder="Enter your query here..." bind:value={userInput} />
		<button on:click={sendMessage}>
			<img src="/svgs/up-arrow.svg" alt="send" />
		</button>
	</div>
</div>

<style>
	.resume-rag {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		border: 1px solid white;
		border-radius: 6px;
		padding: 10px;
		box-sizing: border-box;
		gap: 10px;
	}

	.resume-rag input {
		display: flex;
		width: 100%;
		height: 40px;
		border: none;
		border-radius: 4px;
		padding: 0 10px;
		font-size: 16px;
		box-sizing: border-box;
		justify-self: flex-end;
	}

	.search-bar {
		display: flex;
		gap: 10px;
	}

	.search-bar button {
		height: 40px;
		width: 40px;
		border-radius: 4px;
	}
	.search-bar button:hover {
		background: rgba(255, 255, 255, 0.15);
	}

	.messages-container {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
