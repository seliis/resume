<script>
    // Modules
    import Router from "svelte-spa-router"

    // Pages
    import Landing from "./routes/landing.svelte"

    // Routing
    const routes = {
        "/": Landing
    }
</script>

<main>
    <Router {routes}/>
</main>

<style>

</style>