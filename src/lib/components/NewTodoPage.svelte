<script lang="ts">
    import TodoForm from "./TodoForm.svelte";
    import { createTodo } from "../data/queries";


</script>

<h2>Create New Todo</h2>

<TodoForm mutation={createTodo()} />