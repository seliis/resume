<script>
    let active = false;
    
    function btnFunc() {
        active = !active;
    }

    function menuFunc(path) {
        window.location.href = "#" + path;
        active = !active;
    }
</script>

<div id="btn" class:active={active} on:click={btnFunc}>
    <div class="line top"></div>
    <div class="line mid"></div>
    <div class="line btm"></div>
</div>

<div id="tbl" class:active={active}>
    <nav>
        <ul>
            <li id="m1" on:click={()=>menuFunc("/")}>
                home
            </li>
            <li id="m2" on:click={()=>menuFunc("/profile")}>
                profile
            </li>
            <li id="m3" on:click={()=>menuFunc("/career")}>
                career
            </li>
            <li id="m4" on:click={()=>menuFunc("/activity")}>
                activity
            </li>
        </ul>
    </nav>
</div>

<style>
    #btn {
        position: absolute;
        cursor: pointer;
        margin: 30px;
        height: 50px;
        width: 50px;
        z-index: 1;
    }

    #btn:hover {
        animation: zoom 500ms ease-in;
    }

    .line {
        transition: all 500ms ease-in;
        background-color: #CCCCCC;
        margin: 7.5px 0;
        height: 7.5px;
        width: 100%;
    }

    .active .line {
        cursor: pointer;
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

    #tbl {
        opacity: 0;
        width: 100%;
        height: 100%;
        display: flex;
        line-height: 6rem;
        position: absolute;
        text-align: center;
        align-items: center;
        letter-spacing: 0.25rem;
        justify-content: center;
        transform: translateX(100%);
        background-color: #0F2027;
        transition: all 500ms ease-in;
        background-image: linear-gradient(315deg, #0F2027, #203A43, #2C5364);
    }

    #tbl ul {
        padding: 0;
    }

    #tbl li {
        opacity: 0;
        cursor: pointer;
        font-size: 3rem;
        list-style: none;
        font-weight: 700;
        text-transform: uppercase;
        transform: translateY(2%);
        transition: all 500ms ease-in;
    }

    #tbl.active {
        transform: translateX(0%);
        opacity: 1;
        z-index: 0;
    }

    #tbl.active li {
        opacity: 1;
        transform: translateY(0%);
    }

    #tbl.active #m1 {
        transition-delay: 0.3s;
    }

    #tbl.active #m2 {
        transition-delay: 0.4s;
    }

    #tbl.active #m3 {
        transition-delay: 0.5s;
    }

    #tbl.active #m4 {
        transition-delay: 0.6s;
    }

    #tbl.active li:hover {
        animation: zoom 500ms ease-in;
    }

    @keyframes zoom {
        0%, 100% {
            transform: scale(1.0);
        }
        50% {
            transform: scale(1.1);
        }
    }

    @media only screen and (max-width: 1300px) {
        #btn {
            height: 30px;
            width: 30px;
        }

        .line {
            margin: 5px 0;
            height: 5px;
        }

        #tbl {
            line-height: 4rem;
        }

        #tbl li {
            font-size: 2rem;
        }
    }
</style>