<script lang="ts">
    export let text: string[];
    export let role: "user" | "agent";
</script>

<div class="user-message" style={role==="user" ? "background: #814F9D; align-self: flex-end;" : "background: #A77AB6;"}>
    {#each text as item }
        <p>{item}</p>
    {/each}
</div>

<style>
    .user-message {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: fit-content;
        max-width: 75%;
        padding: 12px 24px;
        border-radius: 24px;
        background: #814F9D;
        color: var(--primary-purple);
    }
</style>