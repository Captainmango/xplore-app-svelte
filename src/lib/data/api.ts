import axios from 'axios'
import { todosStore } from './store'
import type { ToDo } from './types'

const rootUrl = "https://jsonplaceholder.typicode.com/"

const api = axios.create({
    baseURL: rootUrl
})

const val = todosStore.subscribe
val
export async function getToDos() {
    const response = await api.get(`${rootUrl}todos`)
    const json = response.data as ToDo[]
    return json
}

export async function getToDo(id: string) {
    const response = await api.get(`${rootUrl}todos/${id}`)
    const json = response.data as ToDo
    return json
}