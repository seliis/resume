<script>
    // Modules
    import Router from "svelte-spa-router"
    import { menuBool } from "./store.js"

    // Pages
    import Menu from "./routes/menu.svelte"
    import Home from "./routes/home.svelte"
    import About from "./routes/about.svelte"
    import Career from "./routes/career.svelte"
    import Code from "./routes/code.svelte"
    import NotFound from "./routes/notfound.svelte"

    // Toggle
    function btnFunc() {
        if ($menuBool == false) {
            window.location.href="/#/menu";
            $menuBool = !$menuBool;
        } else {
            window.history.back();
            $menuBool = !$menuBool;
        }
    }

    // Routing
    const routes = {
        "/": Home,
        "/about": About,
        "/career": Career,
        "/code": Code,
        "/menu": Menu,
        "*": NotFound
    }
</script>

<main onmousedown="return false">
    <header>
        <div id="btn" class:active={$menuBool} on:click={btnFunc}>
            <div class="line top"></div>
            <div class="line mid"></div>
            <div class="line btm"></div>
        </div>
    </header>
    <section>
        <Router {routes}/>
    </section>
</main>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    :global(body) {
        font-family: "Noto Sans KR", sans-serif;
        background-color: #002451;
        color: #C1CCCC;
        cursor: default;
        margin: 0;
    }

    main {
        grid-template-rows: 5rem 1fr;
        grid-template-columns: 1fr;
        position: relative;
        overflow: hidden;
        display: grid;
        height: 100vh;
        width: 100vw;
    }

    header {
        background-color: #001126;
        justify-content: center;
        align-items: center;
        display: flex;
    }

    #btn {
        cursor: pointer;
        opacity: 0.75;
        transition: all 300ms ease;
        opacity: 0.75;
        width: 2rem;
        height: 2rem;
    }

    #btn:hover {
        opacity: 1;
    }

    .line {
        background-color: #C1CCCC;
        transition: all 300ms ease;
        margin: 5px 0;
        height: 5px;
    }

    .active .top {
        transform: translateY(200%) rotate(45deg);
    }

    .active .mid {
        opacity: 0;
    }

    .active .btm {
        transform: translateY(-200%) rotate(135deg);
    }

    section {
        overflow: hidden;
    }

    @media only screen and (max-width: 1600px) {
        main {
            grid-template-rows: 4rem 1fr;
        }

        #btn {
            height: 1.5rem;
            width: 1.5rem;
        }

        .line {
            margin: 4px 0;
            height: 4px;
        }
    }

    /* Google Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@700&display=swap');

    /* Developing Note */
    /* 1. Make main below from body prevent global overflow. */
    /* 2. You must give relative position in main for prevent global overflow. */
    /* 3. Opacity make z-index problem. */
    /* 4. Animation make z-index problem. */
</style>