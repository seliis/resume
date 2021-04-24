<script>
    // Modules
    import Router from "svelte-spa-router"

    // Components
    import Menu from "./components/menu.svelte"

    // Pages
    import Home from "./routes/home.svelte"
    import Profile from "./routes/profile.svelte"

    // Routing
    const routes = {
        "/": Home,
        "/profile": Profile
    }
</script>

<!-- <main onmousedown="return false"> -->
<main>
    <Menu/>
    <Router {routes}/>
</main>

<style>
    :global(body) {
        font-family: "Noto Sans KR", sans-serif;
        background-color: #080808;
        color: #FFFFFF;
        cursor: default;
        margin: 0;
    }

    main {
        position: relative;
        overflow: hidden;
        height: 100vh;
        width: 100vw;
    }

    * {
        padding: 0;
        margin: 0;
    }

    /* Google Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');

    /* Developing Note */
    /* 1. Make main below from body prevent global overflow. */
    /* 2. You must give relative position in main for prevent global overflow. */
    /* 3. Opacity make z-index problem. */
    /* 4. Animation make z-index problem. */
</style>