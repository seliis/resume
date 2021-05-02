<script>
    import { link } from "svelte-spa-router"
    import { menuBool } from "../store.js"
    import { slide } from "svelte/transition"
    import { quintOut } from "svelte/easing"
    import Resume from "../../public/document/resume.html"

    const menus = [
        "home", "about", "career", "code", "resume-doc"
    ]

    function btnFunc() {
        $menuBool = !$menuBool;
    }

    function docFunc() {
        $menuBool = !$menuBool;
        window.open(Resume, "_blank");
    }

    const menuOps = {
        delay: 0,
        duration: 500,
        easing: quintOut
    }
</script>

<div id="menu" transition:slide="{menuOps}">
    {#each menus as menu}
        {#if menu == "home"}
            <a href="/" use:link on:click={btnFunc}>
                {menu}
            </a>
        {:else if menu == "resume-doc"}
            <a href="/" style="
                background-color: #FD2F4A;
                color: #001126;
            " on:click={docFunc} use:link>
                Resume
            </a>
        {:else}
            <a href="/{menu}" use:link on:click={btnFunc}>
                {menu}
            </a>
        {/if}
    {/each}
</div>

<style>
    a {
        text-decoration: none;
        color: #C1CCCC;
        font-size: 3rem;
        text-align: center;
        width: 50%;
        border-radius: 1rem;
        margin: 1rem;
        padding: 2rem;
        letter-spacing: 0.75rem;
        text-transform: uppercase;
        font-weight: 700;
        font-family: "Roboto", sans-serif;
        background-color: #001126;
        transition: all 300ms ease;
    }

    a:hover {
        color: #001126;
        background-color: #E2B640;
    }

    #menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: #001C40;
    }

    @media only screen and (max-width: 1600px) {
        a {
            font-size: 1.5rem;
            border-radius: 0.5rem;
            margin: 1rem;
            padding: 1.5rem;
            font-weight: 700;
            width: 75%;
        }
    }
</style>