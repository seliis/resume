<script>
    function getTitle(str) {
        return "{ " + str + " }"
    }

    function gitLink() {
        window.location.href="https://github.com/MIHO314/resume";
    }
</script>

<section>
    <div id="intro">
        <div id="picture"></div>
        <h1>안녕하세요.<br>저의 이름은 선인입니다.</h1>
    </div>
    <div id="pg1" class="page">
        <div class="container">
            <h1>{getTitle("about")}</h1>
            <p>
                &nbsp;만나서 반갑습니다.
                저는 항공정비사이면서 프로그래머입니다.
                저는 우리의 생활에서 만나는 문제를
                소프트웨어 기술을 통해 더 나은 방향으로
                나타내는것을 좋아합니다.
                모두에게 이롭고 행복한 결과에 커다란 성취감을 느끼고
                그것을 위해 소프트웨어 공학을 배우는 것을 참 좋아합니다.
                시뮬레이션 게임 프로그래밍을 취미로 시작하여 최근에는
                항공기 데이터 분석 업무를 맡고 있으며
                자동화 도구를 개발하는 활동을 하고있습니다.
            </p>
        </div>
    </div>
    <div id="pg2" class="page">
        <div class="container">
            <h1>{getTitle("skills")}</h1>
            <ul>
                <li>루아(Lua)언어를 통한 게임 스크립팅 및 소프트웨어 개발</li>
                <li>Visual Basic Script 를 통한 엑셀 및 윈도우 제어</li>
                <li>SQL 을 통한 데이터베이스 사용 및 VBA 와의 연동</li>
                <li>HTML, CSS, JavaScript 를 통한 기초적 웹 개발</li>
                <li>Svelte Framework 를 통한 동적 및 SPA 웹 개발</li>
                <li>Go 언어를 통한 마이크로 백엔드 서비스 개발</li>
            </ul>
        </div>
    </div>
    <div id="pg3" class="page">
        <div class="container">
            <h1>{getTitle("interest")}</h1>
            <p>
                &nbsp;현재에는 Go-Lang 에 매우 관심이 많고 Go 언어의
                웹 어셈블리(Web Assembly) 기술을 이용한 PWA(Progressive
                Web Application) 개발을 연구하고 있습니다.
                또한 블록체인과 인공지능에 관심이 많고
                플로우(Flow)를 통한 디앱(dApp) 개발 그리고
                텐서플로우(TensorFlow)를 통한 데이터 모델 예측을 연구해보고자 합니다.
            </p>
        </div>
    </div>
    <div id="pg4" class="page">
        <div class="container">
            <h1>{getTitle("information")}</h1>
            <h2>
                14 March 1991<br>
                +82 10-4849-4471<br>
                ilovemyroro624@gmail.com
            </h2>
            <i id="git" class="fab fa-github" on:click={gitLink}></i>
            <div id="foot">
                <h5>Best Regards</h5>
                <h6>@Developed in Svelte Framework</h6>
            </div>
        </div>
    </div>
</section>

<style>
    section {
        background: #001E1B;
        background: linear-gradient(135deg, #001E1B, #001412, #000A09);
        overflow-y: scroll;
        height: 100%;
        width: 100%;
    }

    #intro {
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
        display: flex;
        height: 100%;
    }

    #picture {
        background-image: url("./image/me.webp");
        background-size: cover;
        border-radius: 50%;
        height: 25rem;
        width: 25rem;
    }

    #intro h1 {
        font-weight: 700;
        font-size: 3rem;
    }

    .page {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        display: grid;
        height: 100%;
    }

    .container {
        background-color: #00322D;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border-radius: 2rem;
        padding: 0 10rem;
        font-size: 3rem;
        display: flex;
        margin: 2rem;
    }

    .container h1 {
        color: #E2B640;
        font-weight: 700;
        font-size: 4rem;
    }

    .container h2 {
        text-align: center;
        font-weight: 500;
        font-size: 3rem;
    }

    .container p {
        text-align: justify;
    }

    .container ul {
        padding-left: 0;
    }

    .container li {
        list-style: inside;
    }

    #foot {
        text-align: center;
        padding-top: 5rem;
        color: black;
    }

    #foot h5 {
        font-size: 2rem;
        margin: 0;
    }

    #foot h6 {
        font-size: 1.5rem;
        font-weight: 500;
        margin: 0;
    }

    #git {
        transition: all 300ms ease-in;
        transform: scale(1.00);
        font-size: 7.5rem;
        padding-top: 3rem;
        color: black;
    }

    #git:hover {
        transform: scale(1.05);
        color: #E2B640;
    }

    @media only screen and (max-width: 1300px) {
        #picture {
            height: 12.5rem;
            width: 12.5rem;
        }

        #intro h1 {
            font-size: 1.25rem;
        }

        .container {
            justify-content: space-evenly;
            border-radius: 0.25rem;
            font-size: 1.5rem;
            padding: 0 1.5rem;
            margin: 0.5rem;
        }

        .container h1 {
            font-size: 2rem;
        }

        .container h2 {
            font-size: 1.75rem;
        }

        .container p {
            text-align: left;
            line-height: 2rem;
        }

        #foot {
            padding-top: 3rem;
        }

        #foot h5 {
            font-size: 1.25rem;
        }

        #foot h6 {
            font-size: 1rem;
        }

        #git {
            font-size: 5rem;
        }
    }
</style>