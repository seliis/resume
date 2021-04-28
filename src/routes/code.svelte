<script>
    import HLTS from "svelte-highlight";
    import lua from "svelte-highlight/src/languages/lua";
    import theme from "svelte-highlight/src/styles/night-Owl";

    import {
        headingTo,
        getUnitAngel,
        missileTracking1,
        missileTracking2
    } from "../store.js"
</script>

<svelte:head>
    {@html theme}
</svelte:head>

<div id="component-code">
    <div class="container">
        <div class="desc">
            <h1>해수면 고도 획득</h1>
            <p>
                이 루아 코드는 비행 시뮬레이션 게임에 적용된
                특정 유닛의 해수면 고도를 리턴하는 함수입니다.
                <samp>unit</samp> 인자로 전달된 객체는
                3차원 좌표 데이터를 가지고 있는 딕셔너리 타입이며
                이 데이터에서 높이 차원인 <samp>y</samp> 의 값을
                리턴합니다.
            </p>
        </div>
        <div class="code">
            <HLTS language={lua} code={$getUnitAngel}/>
        </div>
    </div>
    <div class="container bg">
        <div class="desc">
            <h1>목표 방위 산출</h1>
            <p>
                이 루아 코드는 비행 시뮬레이션 게임에 적용된
                어느 좌표에서 다른 좌표로 향하는
                직선상의 방위를 구하는 전역 함수 객체입니다.
                <samp>from</samp> 과 <samp>to</samp> 는 2차원
                카테시안 좌표계 형식으로 전달되며
                <samp>dz</samp>, <samp>dx</samp> 는 각 차원의
                델타값을 메모리에 할당합니다.
                음수 반환이 가능한 아크탄젠트 메서드인
                <strong>math.atan2</strong> 를 통해 상대적 라디안값을 얻고
                그 라디안 값을 <strong>math.deg</strong> 에 인자로 전달하여
                육십분각으로 변환 후 리턴시키고 함수를 종료합니다.
                만약 결과값이 음수이면 360을 더해 절대값으로 만들어줍니다.
            </p>
        </div>
        <div class="code">
            <HLTS language={lua} code={$headingTo}/>
        </div>
    </div>
    <div class="container">
        <div class="desc">
            <h1>미사일 위치 추적 1</h1>
            <p>
                이 함수는 전역 어레이 <strong>Miho</strong> 의 하위 어레이인
                <strong>Sensor</strong> 를 클래스로 하는 함수입니다.
                <samp>weapon</samp> 을 사격한 유닛을 <samp>getLauncher</samp>
                API 로 획득한 후 <samp>shooter</samp> 에 전달합니다.
                <samp>missile</samp> 변수는 미사일의 3차원 좌표 어레이를 가질
                변수이며 <samp>nil</samp> 로 초기화 되었습니다.
                미사일이 발사된 시간에서 1초가 지난 후 스케쥴러가 시작되며
                익명함수를 0.001s 인터벌로 실행합니다. <strong>pcall</strong>
                함수는 다시 그 아래의 익명함수에서 에러가 발생되면 <samp>ran</samp>
                변수를 <samp>false</samp> 로 반환하는데 이것은 미사일이 사라진 것과
                동일한 의미를 지닙니다. 따라서 조건문의 첫 조건은 성립되지 않으며
                아래에 서술된 코드가 실행되고 스케줄러는 종료됩니다.
            </p>
        </div>
        <div class="code">
            <HLTS language={lua} code={$missileTracking1}/>
        </div>
    </div>
    <div class="container bg">
        <div class="desc">
            <h1>미사일 위치 추적 2</h1>
            <p>
                이 코드에서는 <strong>mist</strong> 라는 라이브러리를
                사용하고 있습니다. 라이브러리 내 데이터베이스에 있는
                모든 유닛 중에서 플레이어의 유닛을 고유식별자로 탐색하여
                인덱스와 데이터를 반복문의 변수로 가져옵니다.
                코드에서 쓰일 수 있도록 유닛 객체를 해당 유닛 이름으로
                찾아내어 <samp>unit</samp> 에 할당합니다.
                만약 유닛이 유효하며 비행중이라면 마지막으로 기록된
                미사일의 좌표와 현재 유닛의 좌표 사이의 3차원 공간상
                거리를 구합니다. 만약 거리가 100m 이내라면 해당 유닛과
                미사일을 사격한 유닛에게 <strong>notice</strong> 함수로
                알림을 보내고 코드내 데이터에 해당 유닛이 피격되었음을
                <strong>declare</strong> 함수로 동기화한 후 반복문을
                빠져나갑니다.
            </p>
        </div>
        <div class="code">
            <HLTS language={lua} code={$missileTracking2}/>
        </div>
    </div>
</div>

<style>
    * {
        line-height: 1.5;
        padding: 0;
        margin: 0;
    }

    samp {
        color: #7FDBCA;
        font-weight: 700;
    }

    strong {
        color: #ADDB67;
        font-weight: 700;
        font-family: "Ubuntu Mono", monospace;
    }

    #component-code {
        overflow-x: hidden;
        overflow-y: scroll;
        height: 100%;
        width: 100%;
    }

    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        height: 100%;
        width: 100%;
    }

    .desc {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    .desc h1 {
        color: #E2B640;
        font-size: 2.5rem;
        font-weight: 700;
        padding: 1.5rem;
    }

    .desc p {
        color: white;
        font-size: 1.75rem;
        font-weight: 500;
        text-align: justify;
        margin: 0 7.5%;
    }

    .code {
        font-size: 1.75rem;
        font-weight: 700;
        background-color: #011627;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }

    .bg {
        background-color: #001C40;
    }

    @media only screen and (max-width: 1600px) {
        .container {
            flex-direction: column-reverse;
            display: flex;
            height: 200%;
        }

        .desc h1 {
            font-size: 1.5rem;
        }

        .code, .desc p {
            font-size: 1rem;
        }
    }
</style>