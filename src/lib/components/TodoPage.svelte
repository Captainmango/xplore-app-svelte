<script lang="ts">
    import { navigate } from "svelte-navigator";
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
        <section>
            <h1>{$todo.data.title} <StatusSwitcher todo={$todo.data} /></h1>
            <fieldset>
                <button class="delete" 
                    on:click|preventDefault|stopPropagation={() => $deleteTodoMutation.mutate(id)}
                >
                    Delete
                </button>
                <button type="submit" on:click|preventDefault|stopPropagation={() => navigate(`${id}/update`)}>
                    Update
                </button>
            </fieldset>
        </section>
    {/if}
</PublicLayout>

<style>
    .delete {
        cursor: pointer;
        background-color: crimson;
        color: whitesmoke;
    }

    .delete:hover {
        background-color: brown;
    }
</style>