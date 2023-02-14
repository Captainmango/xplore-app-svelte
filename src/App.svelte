<script lang="ts">
    import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query'
    import { Router, Route, Link } from 'svelte-navigator'
    import AboutPage from './lib/components/AboutPage.svelte';
    import MainPage from './lib/components/MainPage.svelte';
    import TodosPage from './lib/components/TodosPage.svelte';
    import TodoPage from './lib/components/TodoPage.svelte';
    import NewTodoPage from './lib/components/NewTodoPage.svelte';
    import UpdateTodoPage from './lib/components/UpdateTodoPage.svelte';

    const queryClient = new QueryClient()
</script>

<QueryClientProvider client={queryClient}>
    <main class="main">
        <figure>
            <img src="\brand.svg" alt="xplore logo" style="min-height: 80px;">
        </figure>

        <Router primary={false}>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="todos">Todos</Link>
                    </li>
                </ul>       
            </nav>
            <Route path="/"><MainPage /></Route>
            <Route path="/about"><AboutPage /></Route>
            <Route path="/todos"><TodosPage /></Route>
            <Route path="/todos/:id" let:params><TodoPage id={params.id} /></Route>
            <Route path="/todos/create" ><NewTodoPage /></Route>
            <Route path="/todos/:id/update" let:params><UpdateTodoPage id={params.id} /></Route>     
        </Router>
    </main>
</QueryClientProvider>

<style>
    .main {
        text-align: center;
    }
</style>
