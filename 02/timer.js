let remainingTime = 3000;
const waitingInterval = 500; // 대기 시간 간격 0.5초로 설정

// 0.5초마다 호출되는 함수
const timer = setInterval(() => {
    console.log(`${remainingTime / 1000}초 남음`);
    remainingTime -= waitingInterval; // 남은 시간 감소

    if(remainingTime <= 0) {
        // 남은 시간이 0 이하일 경우 'hi' 메시지를 표시하고 타이머 종료
        console.log("hi");
        clearInterval(timer);
    }
}, waitingInterval);