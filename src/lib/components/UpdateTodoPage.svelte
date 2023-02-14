<script lang="ts">
    import TodoForm from "./TodoForm.svelte";
    import { getTodo, updateTodo } from "../data/queries";

    export let id: string
    const todo = getTodo(id)

</script>

<h2>Update Todo</h2>

<TodoForm 
    mutation={updateTodo(id)} 
    initialTitle={$todo.data.title} 
    initialCompleted={$todo.data.completed} 
/>