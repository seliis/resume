<script>
</script>

<div id="career">
    <div class="container">
        <div id="falcon" class="image" style="background-image: url('./image/falcon.webp');"></div>
        <div class="since">
            2010
        </div>
        <div class="content">
            <h1>대한민국 공군 항공정비사</h1>
            <p>공군 항공과학 고등학교를 졸업하고 KF-16 항공기와 F100-PW-229 엔진을 정비하였습니다.</p>
        </div>
    </div>
    <div class="container">
        <div id="cathay" class="image" style="background-image: url('./image/cathay.webp');"></div>
        <div class="since">
            2018
        </div>
        <div class="content">
            <h1>캐세이퍼시픽 항공정비사</h1>
            <p>캐세이퍼시픽과 영국항공 그리고 여러 항공회사의 보잉 및 에어버스 항공기를 정비하였습니다.</p>
        </div>
    </div>
    <div class="container">
        <div id="program" class="image" style="background-image: url('./image/program.webp');"></div>
        <div class="since">
            2019
        </div>
        <div class="content">
            <h1>미국 공군기지 대한민국 군무원</h1>
            <p>항공기 데이터를 분석하고 있으며 통합 자동화 프로그램을 개발중입니다.</p>
        </div>
    </div>
</div>

<style>
    #falcon {
        background-position: 67.5% top;
    }

    #cathay {
        background-position: center center;
    }

    #program {
        background-position: 25% center;
    }

    #career {
        display: flex;
        background-color: #031625;
    }

    #career:hover .container {
        width: 20%;
    }

    .container {
        transform: translate3d(0, 0, 0);
        position: relative;
        width: calc(100% / 3);
        color: white;
        transition: width 500ms ease;
        height: 100vh;
        min-height: 600px;
        overflow: hidden;
    }

    .container:before, .container:after {
        transform: translate3d(0, 0, 0);
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .container:after {
        background: rgba(3, 22, 37, 0.85);
        opacity: 1;
        transition: opacity 500ms ease;
    }

    .container:before {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, black 75%);
        z-index: 1;
        opacity: 0;
        transform: translate3d(0, 0, 0) translateY(50%);
        transition: opacity 500ms ease, transform 500ms ease;
    }

    .container:hover {
        width: 75% !important;
    }

    .container:hover:after {
        opacity: 0;
    }

    .container:hover:before {
        opacity: 1;
        transform: translate3d(0, 0, 0) translateY(0);
        transition: opacity 1s ease, transform 1s ease 250ms;
    }

    .container:hover .content {
        opacity: 1;
        transform: translateY(0);
        transition: all 750ms ease 500ms;
    }

    .container:hover .image {
        filter: grayscale(0);
    }

    .content {
        transform: translate3d(0, 0, 0) translateY(25px);
        position: relative;
        z-index: 1;
        text-align: center;
        margin: 0 1.5rem;
        top: 55%;
        opacity: 0;
    }

    .content h1 {
        font-size: 1.75rem;
        font-weight: 700;
        color: #FD2F4A;
    }

    .content p {
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 1.5;
    }

    .since {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 1;
        font-size: 3rem;
        font-weight: 700;
        font-family: "Roboto", sans-serif;
        color: #C1CCCC;
        border-top: 2px solid #C1CCCC;
        border-bottom: 2px solid #C1CCCC;
        padding: 3px 0;
    }

    .image {
        transform: translate3d(0, 0, 0);
        position: absolute;
        top: 0;
        left: 0;
        transition: filter 500ms ease;
        filter: grayscale(100%);
        background-size: cover;
        width: 100%;
        height: 100%;
    }

    @media only screen and (max-width: 1600px) {
        .since {
            font-size: 1rem;
        }

        .content h1 {
            font-size: 1rem;
        }

        .content p {
            font-size: 0.75rem;
            margin: auto;
            width: 80%;
        }
    }
</style>