import { createMutation, createQuery, useQueryClient } from '@tanstack/svelte-query'
import { useNavigate } from 'svelte-navigator'
import { createTodoApi, getToDo, getToDos, deleteTodoApi, patchTodoApi } from './api'
import type { ToDo } from './types'

export function getTodos() {
    return createQuery<ToDo[], Error>({
        queryKey: ['todos'],
        queryFn: () => getToDos(),
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
    const navigate = useNavigate()
    return createMutation(
        (todo: ToDo) => createTodoApi(todo),
        {
            onSuccess: () => {
                client.invalidateQueries(['todos'])
                navigate('/todos')
            }
        }
    )
}

export function deleteTodo(todoId: string) {
    const client = useQueryClient()
    const navigate = useNavigate()
    return createMutation(
        (todoId: string) => deleteTodoApi(todoId),
        {
            onSuccess: () => {
                client.invalidateQueries(['todo', todoId])
                client.invalidateQueries(['todos'])
                navigate('/todos')
            }
        }
    )
}

export function updateTodo(todoId: string) {
    const client = useQueryClient()
    const navigate = useNavigate()
    return createMutation(
        (todo: ToDo) => patchTodoApi(todoId, todo),
        {
            onSuccess: () => {
                client.invalidateQueries(['todo', todoId])
                client.invalidateQueries(['todos'])
                navigate('/todos')
            }
        }
    )
}