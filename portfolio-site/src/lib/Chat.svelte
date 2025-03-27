<script lang="ts">
    import Message from "./Message.svelte";

    let sampleQuestion: string[] = ["What do you do at PBS"]
    let sampleResponse: string[] = ["I am a Data Engineer on the PBS Digital Innovation Team. The Innovation team is responsible for exploring and experimenting with new and emerging technologies."]
</script>

<div class="chat">
    <Message text={sampleQuestion} role="user" />
    <Message text={sampleResponse} role="agent" />
</div>

<style>
    .chat {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 30px;
        gap: 40px;
        box-sizing: border-box;
        background: var(--secondary-purple);
    }
</style>