<script>
</script>

<section>
    <img id="plane" src="./image/plane.webp" alt="plane" width="100%" height="100%">
    <div id="info">
        <div id="name">IN SUN</div>
        <div id="desc">AVIATION & PROGRAMMING</div>
    </div>
    <!-- <div id="icon">
        <i id="github" class="fab fa-github"></i>
    </div> -->
</section>

<style>
    section {
        height: 100vh;
    }

    #plane {
        object-position: 40% bottom;
        position: absolute;
        object-fit: cover;
        opacity: 0.75;
        height: 100%;
        z-index: -2;
    }

    #info {
        text-shadow: 1px 1px 3px black;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        position: absolute;
        display: flex;
        height: 100%;
        width: 100%;
        z-index: -1;
    }

    #name {
        font-weight: 500;
        font-size: 5rem;
    }

    #desc {
        letter-spacing: 0.25rem;
        color: #FD2F4A;
        font-weight: 300;
        font-size: 2rem;
    }

    @media only screen and (max-width: 1300px) {
        #name {
            font-size: 3rem;
            font-weight: 700;
        }

        #desc {
            font-size: 1rem;
            font-weight: 700;
        }
    }
</style>