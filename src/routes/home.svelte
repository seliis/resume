<script>

</script>

<div id="home">
    <img src="./image/plane.webp" alt="home">
    <div id="text">
        <h1>IN SUN</h1>
        <h2>AVIATION & PROGRAMMING</h2>
    </div>
</div>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    #home {
        position: relative;
        height: 100%;
        width: 100%;
        text-align: center;
        overflow: hidden;
    }

    img {
        object-position: 42.5% bottom;
        object-fit: cover;
        height: 100%;
        width: 100%;
        filter: blur(5px);
    }

    #text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-shadow: 3px 3px 5px #080808;
        font-family: "Roboto", sans-serif;
        width: 100%;
    }

    h1 {
        font-size: 9rem;
        font-weight: 700;
        color: white;
    }

    h2 {
        font-size: 3rem;
        font-weight: 500;
        color: #FD2F4A;
        letter-spacing: 0.5rem;
    }

    @media only screen and (max-width: 1600px) {
        h1 {
            font-size: 5rem;
        }

        h2 {
            font-size: 1rem;
            letter-spacing: 0.25rem;
            font-weight: 900;
        }
    }
</style>