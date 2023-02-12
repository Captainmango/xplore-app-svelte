import { createQuery } from '@tanstack/svelte-query'
import { getToDo, getToDos } from './api'
import type { ToDo } from './types'

export function getTodos() {
    return createQuery<ToDo[], Error>({
        queryKey: ['todos'],
        queryFn: () => getToDos()
    })
}

export function getTodo(id: number) {
    return createQuery<ToDo, Error>({
        queryKey: ['todo', id],
        queryFn: () => getToDo(id)
    })
}