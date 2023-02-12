<script lang="ts">
    import { useNavigate } from "svelte-navigator";
    import StatusSwitcher from "./StatusSwitcher.svelte";
    import { paginate, LightPaginationNav } from 'svelte-paginate'

    export let todos = []
    let pageSize = 10
    let currentPage= 1

    const navigate = useNavigate()
    $: paginatedTodos = paginate({items: todos, pageSize, currentPage})
</script>

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
        {#each paginatedTodos as todo}
            <tr>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <td on:click={() => navigate(`${todo.id}`)}>{todo.userId}</td>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <td on:click={() => navigate(`${todo.id}`)}>{todo.id}</td>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <td on:click={() => navigate(`${todo.id}`)}>{todo.title}</td>
                <td><StatusSwitcher todo={todo} /></td>
            </tr>
        {/each}
    </tbody>
</table>
<LightPaginationNav
  totalItems="{todos.length}"
  pageSize="{pageSize}"
  currentPage="{currentPage}"
  limit="{1}"
  showStepOptions="{true}"
  on:setPage="{(e) => currentPage = e.detail.page}"
/>

<style>
    tr:hover {
        background-color: rgba(0.3, 0.5, 0.7, 0.2);
        cursor: pointer;
    }
</style>

