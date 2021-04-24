<script>
</script>

<section>
    <div id="plane"></div>
    <div id="info">
        <div id="name">IN SUN</div>
        <div id="desc">AVIATION & PROGRAMMING</div>
    </div>
</section>

<style>
    section {
        height: 100%;
    }

    #plane {
        background-image: url("./image/plane.webp");
        background-position: 40% bottom;
        background-size: cover;
        position: absolute;
        opacity: 0.5;
        height: 100%;
        width: 100%;
        z-index: -1;
    }

    #info {
        justify-content: center;
        flex-direction: column;
        align-items: center;
        display: flex;
        height: 100%;
        width: 100%;
    }

    #name {
        font-weight: 500;
        font-size: 9rem;
    }

    #desc {
        letter-spacing: 0.25rem;
        color: #FD2F4A;
        font-weight: 400;
        font-size: 3rem;
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