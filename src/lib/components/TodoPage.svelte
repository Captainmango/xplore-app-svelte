<script lang="ts">
    import { deleteTodo, getTodo } from "../data/queries";
    import PublicLayout from "./layouts/PublicLayout.svelte";
    import StatusSwitcher from "./StatusSwitcher.svelte";

    export let id: string

    const todo = getTodo(id)
    const deleteTodoMutation = deleteTodo(id)

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
            <fieldset>
                <button class="delete" on:click|preventDefault|stopPropagation={() => $deleteTodoMutation.mutate(id)}>
                    Delete
                </button>
            </fieldset>
        </article>
    {/if}
</PublicLayout>

<style>
    .delete {
        cursor: pointer;
        background-color: crimson;
        color: whitesmoke;
        transition: all 0.15s ease-in-out;
    }

    .delete:hover {
        background-color: brown;
    }
</style>