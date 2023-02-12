import axios from 'axios'
import type { ToDo } from './types'

const rootUrl = "https://jsonplaceholder.typicode.com/"

const api = axios.create({
    baseURL: rootUrl
})

export async function getToDos() {
    const response = await api.get(`${rootUrl}todos`)
    const json = response.data as ToDo[]
    return json
}

export async function getToDo(id: number) {
    const response = await api.get(`${rootUrl}todos/${id}`)
    const json = response.data as ToDo
    return json
}