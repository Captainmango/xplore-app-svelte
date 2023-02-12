<script lang="ts">
    import { Link } from "svelte-navigator";
    import PublicLayout from "./layouts/PublicLayout.svelte";
    import TodosList from "./TodosList.svelte";



</script>

<PublicLayout>
    <Link to="/todos/create">Create a todo</Link>

    <TodosList />
</PublicLayout>
