<script>
    // Modules
    import Router from "svelte-spa-router"

    // Components
    import Menu from "./components/menu.svelte"

    // Pages
    import Home from "./routes/home.svelte"

    // Routing
    const routes = {
        "/": Home
    }
</script>

<main onmousedown="return false">
    <Router {routes}/>
    <Menu/>
</main>

<style>
    :global(body) {
        font-family: "Noto Sans KR", sans-serif;
        background-color: #080808;
        color: #CCCCCC;
        overflow: hidden;
        cursor: default;
        height: 100vh;
        width: 100vw;
        margin: 0;
    }

    * {
        padding: 0;
        margin: 0;
    }

    /* Google Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');
</style>