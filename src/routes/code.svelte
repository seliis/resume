<script>
    import HLTS from "svelte-highlight";
    import lua from "svelte-highlight/src/languages/lua";
    import vbs from "svelte-highlight/src/languages/vbscript";
    import theme from "svelte-highlight/src/styles/night-Owl";

    import {
        headingTo,
        getUnitAngel,
        missileTracking1,
        missileTracking2,
        GetEom,
        IsDate,
        ConnDB,
        Upload,
        IsExtended,
        Convert1,
        Convert2,
        endCode
    } from "../store.js"

    function gitLink() {
        window.location.href="https://github.com/MIHO314/resume";
    }
</script>

<svelte:head>
    {@html theme}
</svelte:head>

<div id="component-code">
    <div id="intro">
        <i class="fas fa-laptop-code"
            on:click={gitLink}
        ></i>
        <p>
            이 섹션에는 제가 작성한 코드들이 있습니다.
            더 자세한 코드는 저의 깃허브에서 보실 수 있습니다.
            깃허브 링크는 위의 이미지를 클릭하시면 연결됩니다.
            다만 엑셀 및 한셀 VBA 코드의 경우 정부 인트라넷에서
            사용되므로 보안 관계상 깃허브에서 보실 수 없습니다.
            양해를 바랍니다.
        </p>
    </div>
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
                <strong>math.atan2</strong> 를 통해 상대적 라디안 값을 얻어
                해당 값을 <strong>math.deg</strong> 에 인자로 전달하고
                육십분각으로 변환 후 리턴시킨 다음에 함수를 종료합니다.
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
    <div class="container">
        <div class="desc">
            <h1>해당 월의 마지막 일자 획득</h1>
            <p>
                이 전역 함수는 날짜 스트링을 값으로 전달받아
                데이트 형식으로 바꾸고 워크시트의 기본 함수를 통해
                해당 월의 마지막 일자를 반환하는 VBA 코드입니다.
                항공기에 장착되는 부품의 정확한 사용한계를
                계산하기 위하여 사람이 직접 달력을 찾아
                잘못된 값을 수정하는 것이 아닌 반복문을 통하여
                자동으로 엑셀의 모든 관련 일자를 마지막 일자로
                재입력시키는 코드입니다. 반드시 <samp>ByVal</samp>
                선언을 통하여 메모리 참조가 아닌 값을 다른 메모리 구획에
                할당시켜야 반복문에서의 에러를 방지할 수 있습니다.
            </p>
        </div>
        <div class="code">
            <HLTS language={vbs} code={$GetEom}/>
        </div>
    </div>
    <div class="container bg">
        <div class="desc">
            <h1>날짜 데이터 유효성 검증</h1>
            <p>
                이 전역 함수는 자료의 날짜가 유효한지 검사합니다.
                에러 제어 구문이 사용되었으며 스트링 값을 데이트 값으로
                변환시키는 <strong>CDate</strong> 함수에서 에러가 발생하면
                프로세서는 실행지점을 <samp>Failed:</samp> 로 이동합니다.
                <strong>CDate</strong> 가 실패하였다는 것은 이유야 어찌되었든
                날짜 형식으로 유효하지 않기 때문에 함수는 <samp>False</samp>
                를 리턴하고 종료됩니다. 만약 값이 유효하다면 <samp>True</samp>
                를 반환하고 함수를 종료합니다.
            </p>
        </div>
        <div class="code">
            <HLTS language={vbs} code={$IsDate}/>
        </div>
    </div>
    <div class="container">
        <div class="desc">
            <h1>데이터베이스 연결</h1>
            <p>
                이 함수는 데이터베이스를 연결하는 과정을 객체화한 모델입니다.
                데이터베이스의 경로 데이터가 삽입된 스트링 스트림을 리턴하는데
                이는 데이터베이스에 연결이 필요할 때 단순한 함수를 호출하는 것
                하나로 이루어질 수 있도록 하는 편리함을 제공합니다. 함수 아래에
                있는 예시에서의 <strong>Database.Open ConnDB()</strong> 는 어느
                서브루틴 또는 함수안에서 실행될 수 있습니다.
            </p>
        </div>
        <div class="code">
            <HLTS language={vbs} code={$ConnDB}/>
        </div>
    </div>
    <div class="container bg">
        <div class="desc">
            <h1>VBA 에서의 SQL 사용 1</h1>
            <p>
                이 코드는 연결된 데이터베이스에 SQL 을 실행하는 코드입니다.
                <samp>Lr</samp>, <samp>Lc</samp> 는 각각 마지막 행과 열을 말하며
                워크시트의 2번 행부터 마지막 행까지 모든 열의 정보를 SQL 로
                구축하는 내용이 반복문에 구현되어 있습니다.
                <strong>Database.Execute</strong> 메서드를 통해
                이 구문을 데이터베이스로 실행하도록 할 수 있습니다.
            </p>
        </div>
        <div class="code">
            <HLTS language={vbs} code={$Upload}/>
        </div>
    </div>
    <div class="container">
        <div class="desc">
            <h1>VBA 에서의 SQL 사용 2</h1>
            <p>
                이 함수는 데이터베이스의 자료를 가져오는 코드입니다.
                SQL 명령문을 보내면 <strong>Record</strong> 로 반환되며
                만약 레코드의 수가 0 보다 클 때에는 해당하는 데이터가
                존재하므로 <samp>Data</samp> 정적 배열로 반환합니다.
                이 명령에서는 물건의 재고번호와 일련번호를 통해
                유니크한 레코드를 가져오는 것이므로
                레코드 수가 없거나 오직 하나가 존재하는
                두 경우만 존재합니다.
            </p>
        </div>
        <div class="code">
            <HLTS language={vbs} code={$IsExtended}/>
        </div>
    </div>
    <div class="container bg">
        <div class="desc">
            <h1>VBA 에서의 COM 인터페이스 사용 1</h1>
            <p>
                이 코드는 VBA 에서 터미널을 통해 COM 인터페이스를
                사용하는 코드입니다. 공공기관에서는 엑셀이 아닌 한셀을
                사용하는데 이것을 엑셀로 변환할 때에 수동으로 하는 불편함을
                해소하고자 만든 코드입니다. 이 코드에서는 우선 파워쉘을
                사용하며 파워쉘 파일을 만드는 코드입니다.
                파워쉘 코드와 터미널에서의 실행은 아래의 2번을 참고하십시오.
            </p>
        </div>
        <div class="code">
            <HLTS language={vbs} code={$Convert1}/>
        </div>
    </div>
    <div class="container">
        <div class="desc">
            <h1>VBA 에서의 COM 인터페이스 사용 2</h1>
            <p>
                COM 인터페이스를 통해 프로그램을 열지 않고 내부적으로
                제어할 수 있습니다. 이 파워쉘 코드는 한셀 파일을
                COM 으로 열고 51번 형식(.xlsx)으로 저장시키는
                기능을 합니다. 변환이 완료된 후 파워쉘 파일과
                한셀 프로그램은 자동으로 제거되고 종료됩니다.
                터미널에서의 실행은 실행 정책을 우회하여
                최대 화면 크기에서 실행됩니다.
            </p>
        </div>
        <div class="code">
            <HLTS language={vbs} code={$Convert2}/>
        </div>
    </div>
    <div id="end">
        <HLTS language={lua} code={$endCode}/>
    </div>
</div>

<style>
    * {
        line-height: 1.5;
        padding: 0;
        margin: 0;
    }

    #end {
        height: 100%;
        width: 100%;
        background-color: #011627;
        color: white;
        font-size: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: 700;
    }

    #intro {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #001C40;
        font-weight: 500;
    }

    #intro i {
        font-size: 15rem;
        color: #FF3399;
    }

    #intro p {
        font-size: 2rem;
        text-align: center;
        margin: 0 15%;
        color: white;
        text-align: justify;
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
        font-size: 1.25rem;
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

        .desc p {
            font-size: 1rem;
        }

        .code {
            font-size: 0.50rem;
        }

        #intro i {
            font-size: 10rem;
        }

        #intro p {
            font-size: 1.25rem;
            margin: 7.5%;
        }

        #end {
            font-size: 1.25rem;
        }
    }
</style>