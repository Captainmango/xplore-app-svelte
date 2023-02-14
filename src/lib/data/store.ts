import { createClient } from "@supabase/supabase-js";
import { writable } from "svelte/store";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

function auth() {
    const {subscribe, set, update} = writable("")

    return {
        subscribe,
        signUp: async () => {
            const {data, error} = await supabase.auth.signUp({
                email: 'test1@test.com',
                password: 'password123',
            })

            console.log(data)
            console.log(error)

            set(data.user.id)
        },
        signIn: async () => {
            const {data, error} = await supabase.auth.signInWithPassword({
                email: 'test1@test.com',
                password: 'password123',
            })

            set(data.user.id)
        },
        signOut: async () => {
            const {error} = await supabase.auth.signOut()

            console.log(error)
            set("")
        }
    }
}

export const authStore = auth()