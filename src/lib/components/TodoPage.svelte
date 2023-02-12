<script lang="ts">
    import { getTodo } from "../data/queries";
    import PublicLayout from "./layouts/PublicLayout.svelte";
    import StatusSwitcher from "./StatusSwitcher.svelte";

    export let id: string

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
            <h3><StatusSwitcher todo={$todo.data} /></h3>
        </article>
    {/if}
</PublicLayout>