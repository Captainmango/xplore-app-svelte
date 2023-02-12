<script lang="ts">
    import { Link } from "svelte-navigator";
    import { getTodos } from "../data/queries";
    import PublicLayout from "./layouts/PublicLayout.svelte";
    import TodosList from "./TodosList.svelte";

    const todos = getTodos()

</script>

<PublicLayout>
    <Link to="/todos/create">Create a todo</Link>

    {#if $todos.status === 'loading'}
    <span>Loading...</span>
    {:else if $todos.status === 'error'}
    <span>Error: {$todos.error.message}</span>
    {:else}
    <TodosList todos={$todos.data} />
    {/if}
</PublicLayout>
