<script lang="ts">
    import type { ToDo } from "../data/types";

    export let todo: ToDo
    function complete() {
        todo.completed = !todo.completed
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span on:click={complete}>{todo.completed ? '✅' : '❌'}</span>