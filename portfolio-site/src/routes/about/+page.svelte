<script lang="ts">
    import AboutInformation from "$lib/AboutInformation.svelte";
    import Chat from "$lib/Chat.svelte";
</script>
<main>
    <AboutInformation />
    <div class="chat-container">
        <Chat />
    </div>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: 40% 60%;
        height: 100%;
        gap: 30px;
    }

    .chat-container {
        height: 80%;
        align-self: flex-end;
    }
    
</style>
