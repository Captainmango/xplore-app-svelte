<script lang="ts">
    import { createForm } from "felte";
    import { validator } from "@felte/validator-yup";
    import * as yup from "yup";
    import { createTodo } from "../data/queries";
    import type { ToDo } from "../data/types";

    const todoSchema = yup.object({
        title: yup.string().required(),
        completed: yup.boolean().required().equals([false]),
    })

    const mutation = createTodo()

    const { form, errors, reset } = createForm({
        extend: validator({schema: todoSchema}),
        onSubmit: (values) => {
            const unsubscribe = mutation.subscribe(o => {
                o.mutate(values)
            })
            reset()
            unsubscribe()
        }
    });
</script>

<form use:form on:submit|preventDefault>
    <div>
        <label for="title">
            Title
        </label>        
        {#if $errors.title}<li class="error">{$errors.title}</li>{/if}
    </div>
    <input type="text" name="title" id="title" />

    <div>
        <label for="completed">
            Completed?
        </label>
        {#if $errors.completed}<li class="error">{$errors.completed}</li>{/if}
    </div>
    <input type="checkbox" name="completed" />
    
    <div>
        <button type="submit">Submit</button>
    </div>
</form>

<style>
    label {
        font-size: 20px;
        font-weight: bold;
    }

    .error{
        color: red;
        list-style: none;
    }
</style>