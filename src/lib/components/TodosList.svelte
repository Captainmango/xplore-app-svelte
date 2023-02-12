<script lang="ts">
    import { getTodos } from "../data/queries";
    import { useNavigate } from "svelte-navigator";

    const todos = getTodos()
    const navigate = useNavigate()
</script>

{#if $todos.status === 'loading'}
<span>Loading...</span>
{:else if $todos.status === 'error'}
<span>Error: {$todos.error.message}</span>
{:else}
<table>
    <thead>
        <th style="width:100px;">
            User ID
        </th>
        <th>
            ID
        </th>
        <th>
            Title
        </th>
        <th>
            Done?
        </th>
    </thead>
    <tbody>
        {#each $todos.data as todo}
            <tr on:click={() => navigate(`${todo.id}`)}>
                <td>{todo.userId}</td>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? '✅' : '❌'}</td>
            </tr>
        {/each}
    </tbody>
</table>
{/if}

<style>
    tr:hover {
        background-color: rgba(0.3, 0.5, 0.7, 0.2);
        cursor: pointer;
    }
</style>

