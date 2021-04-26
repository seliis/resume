<script>
    function getStr(str) {
        return "{ " + str + " }"
    }

    function gitLink() {
        window.location.href="https://github.com/MIHO314/resume";
    }
</script>

<div id="about">
    <div id="intro">
        <img src="./image/me.webp" alt="me">
        <h1>안녕하세요<br>저의 이름은 선인입니다</h1>
        <div id="scroll">
            <div id="scroll-content">
                <h1>SCROLL DOWN</h1>
                <i class="fas fa-angle-down"></i>
            </div>
        </div>
    </div>
    <div class="container left">
        <i class="fas fa-tools"></i>
        <div class="content">
            <h2>
                {getStr("저는 항공정비사입니다")}
            </h2>
            <h3>
                우리나라 공군과 인천국제공항에서 항공정비사로 일했습니다.
            </h3>
        </div>
    </div>
    <div class="container right">
        <div class="content">
            <h2>{getStr("취미는 프로그래밍입니다")}</h2>
            <h3>
                현재에는 항공기 데이터 분석 업무를 하고 있습니다.
            </h3>
        </div>
        <i class="fas fa-code"></i>
    </div>
    <div class="container left">
        <i class="fas fa-microchip"></i>
        <div class="content">
            <h2>
                {getStr("소프트웨어는 너무나 아름답습니다")}
            </h2>
            <h3>
                어떠한 문제에는 항상 더 나은 해결방법이 있습니다.
                <br>
                소프트웨어는 효율적인 방법이 될 수 있습니다.
            </h3>
        </div>
    </div>
    <div class="container right">
        <div class="content">
            <h2>{getStr("일은 효율적으로 할 수 있습니다")}</h2>
            <h3>
                업무를 데이터베이스와 VBA 로 자동화하고 있습니다.
                <br>
                효율성과 정확성 그리고 인적결함의 방지를 생각할 수 있습니다.
            </h3>
        </div>
        <i class="fas fa-chart-line"></i>
    </div>
    <div class="container">
        <div id="lang">
            <img src="./image/lua.webp" alt="lua">
            <img src="./image/vba.webp" alt="vba">
            <img src="./image/js.webp" alt="js">
            <img src="./image/go.webp" alt="go">
            <img src="./image/wa.webp" alt="wa">
        </div>
    </div>
    <div class="container left">
        <i class="fas fa-book"></i>
        <div class="content">
            <h2>
                {getStr("배우는 것에서 즐거움을 느낍니다")}
            </h2>
            <h3>
                늘 새로운 것을 둘러보며 탐구하고자 합니다.
                <br>
                변화는 빠르게 다가오며 세상은 아는만큼 보이기 때문입니다.
            </h3>
        </div>
    </div>
    <div class="container right">
        <div class="content">
            <h2>
                {getStr("블록체인과 인공지능은 미래입니다")}
            </h2>
            <h3>
                미래에는 이들이 우리 생활을 바꿀것이며 그 변화는 이미 시작되었습니다.
                <br>
                플로우와 텐서플로우를 통해 그들을 알아가고자 합니다.
            </h3>
        </div>
        <i class="fab fa-bitcoin"></i>
    </div>
    <div class="container left">
        <i class="far fa-question-circle"></i>
        <div style="text-align: center;">
            <h1>
                혹시 더 궁금한 이야기가 있으신가요?
                <br>
                아래에 저의 정보가 있습니다.
            </h1>
        </div>
    </div>
    <div class="container">
        <div id="contact">
            <i class="fab fa-github"
                on:click={gitLink}
            ></i>
            <p>
                Best Regards
                <br>
                14 March 1991
                <br>
                +82 10-4849-4471
                <br>
                ilovemyroro624@gmail.com
                <br>
                @Developed in Svelte Framework
            </p>
        </div>
    </div>
</div>

<style>
    * {
        line-height: 1.5;
        padding: 0;
        margin: 0;
    }

    #scroll {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 0;
        padding: 0.5rem 5rem 0.5rem 5rem;
        animation: zoom 750ms ease infinite;
        background-color: #001126;
        border-radius: 1rem;
        margin: 1rem 0;
    }

    #scroll h1 {
        font-size: 1.5rem;
        letter-spacing: 0.25rem;
        font-weight: 700;
        font-family: "Roboto", sans-serif;
    }

    #scroll i {
        color: #FD2F4A;
        font-size: 2.5rem;
        line-height: 0;
    }

    @keyframes zoom {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.025);
        }
    }

    #contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 0;
        background-color: #001126;
        width: 100%;
        height: 100%;
    }

    #contact i {
        font-size: 5rem;
        color: #FFFAF0;
        padding: 2rem 0;
        margin: 0;
        cursor: pointer;
    }

    #contact i:hover {
        color: #E2B640;
        transform: scale(1.05);
    }

    #contact p {
        font-size: 1rem;
        color: #C1CCCC;
        font-weight: 400;
        font-family: "Roboto", sans-serif;
        text-align: center;
    }

    #lang {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    #lang img {
        width: 12.5rem;
        height: 12.5rem;
        object-fit: contain;
        object-position: center center;
        margin: 1.5rem;
        border-radius: 1rem;
    }

    #about {
        height: 100%;
        width: 100%;
        overflow-y: scroll;
        color: #FFFAF0;
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50%;
        width: 75%;
        margin: auto;
        background-color: #001C40;
    }

    .container i {
        color: #FF3399;
        font-size: 15rem;
        padding: 0 5rem;
    }

    .left {
        text-align: left;
    }

    .right {
        text-align: right;
    }

    #intro {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 75%;
        height: 100%;
        text-align: center;
        margin: auto;
        background-color: #001C40;
    }

    #intro img {
        width: 30rem;
        height: 30rem;
        border-radius: 50%;
        opacity: 0.75;
    }

    h1 {
        font-weight: 700;
        font-size: 2.5rem;
        margin: 1rem;
    }

    h2 {
        font-size: 2.5rem;
        font-weight: 700;
        color: #BFFF00;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 700;
        padding-top: 1rem;
    }

    @media only screen and (max-width: 1600px) {
        #intro {
            width: 100%;
        }
        
        #intro img {
            width: 15rem;
            height: 15rem;
        }
        
        h1 {
            font-size: 1.5rem;
        }

        .container h1 {
            font-size: 1.25rem;
        }

        #scroll {
            padding: 0.5rem 3rem 0.5rem 3rem;
            margin: 1rem 0;
        }

        #scroll h1 {
            font-size: 1rem;
            letter-spacing: 0.1rem;
            line-height: 0.75;
        }

        #scroll i {
            font-size: 2rem;
            line-height: 0;
        }

        .container {
            flex-direction: column;
            text-align: center;
            height: 100%;
            width: 100%;
        }

        .container i {
            font-size: 10rem;
        }

        .container h2 {
            font-size: 1.75rem;
        }

        .container h3 {
            font-size: 1.5rem;
        }

        .content {
            width: 75%;
        }

        #lang {
            width: 75%;
        }

        #lang img {
            width: 5rem;
            height: 5rem;
            margin: 0.5rem;
            border-radius: 1rem;
        }

        .left {
            background-color: #002451;
        }

        .right {
            flex-direction: column-reverse;
        }
    }
</style>