<script lang="ts">
    import { createForm } from "felte";
    import { validator } from "@felte/validator-yup";
    import * as yup from "yup";
    import type { CreateMutationResult } from "@tanstack/svelte-query";

    const todoSchema = yup.object({
        title: yup.string().required(),
        completed: yup.boolean().required(),
    })

    export let mutation: CreateMutationResult
    export let initialTitle: string = ""
    export let initialCompleted: boolean = false

    const { form, errors, reset } = createForm({
        initialValues: {
            title: initialTitle,
            completed: initialCompleted
        },
        extend: validator({schema: todoSchema}),
        onSubmit: (values) => {
            const unsubscribe = mutation.subscribe(async o => {
                o.mutate(values)
            })
            reset()
            unsubscribe()
        }
    });
</script>
<section style="width:360px;">
<article>
<form use:form on:submit|preventDefault>
    <fieldset>
        <label for="title">
            Title
        </label>     
        <input type="text" name="title" id="title" />   
        {#if $errors.title}<li class="error">{$errors.title}</li>{/if}
    </fieldset>
 
    <fieldset>
        <label for="completed">
            Completed?
        </label>
        <input type="checkbox" name="completed" />
        {#if $errors.completed}<li class="error">{$errors.completed}</li>{/if}

    </fieldset>

    <fieldset>
        <button type="submit">Submit</button>
    </fieldset>
</form>
</article>
</section>

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
