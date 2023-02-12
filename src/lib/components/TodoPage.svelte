<script lang="ts">
    import { getTodo } from "../data/queries";
    import PublicLayout from "./layouts/PublicLayout.svelte";

    export let id

    const todo = getTodo(id)

</script>

<PublicLayout>
    {#if $todo.status === 'loading'}
    <span>Loading...</span>
    {:else if $todo.status === 'error'}
    <span>Error: {$todo.error.message}</span>
    {:else}
        <article>
            <h1>{$todo.data.title}</h1>
            <h3>{$todo.data.completed ? '✅' : '❌'}</h3>
        </article>
    {/if}
</PublicLayout>