import { createMutation, createQuery, useQueryClient } from '@tanstack/svelte-query'
import { createTodoApi, getToDo, getToDos } from './api'
import type { ToDo } from './types'

export function getTodos() {
    return createQuery<ToDo[], Error>({
        queryKey: ['todos'],
        queryFn: () => getToDos()
    })
}

export function getTodo(id: string) {
    return createQuery<ToDo, Error>({
        queryKey: ['todo', id],
        queryFn: () => getToDo(id),
    })
}

export function createTodo() {
    const client = useQueryClient()
    return createMutation(
        (todo: ToDo) => createTodoApi(todo),
        {
            onSuccess: (vals) => {
                client.invalidateQueries(['todos'])
                client.refetchQueries(['todos'])
                console.log(vals)
            }
        }
    )
}