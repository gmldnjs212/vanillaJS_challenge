const clock = document.querySelector("h2#clock")

// interval 개념 사용 ( 매 n초마다 실행 )
// padStart(사용할 칸수, 빈곳에 채울 값) - string만 사용가능
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); 
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(function , ms);
getClock();
setInterval(getClock, 1000); // sayHello 함수를 5초마다 실행

// setTimeout(function , ms);
// setTimeout(sayHello, 5000); // sayHello함수를 5초뒤에 실행 - 5초 지연 

// [ 날짜 시간관련 메소드 ]
// const date = new Date()
// date.getDate() : 날짜
// date.getDay() : 요일 ( 0 ~ 6 )
// date.getHours() : 시간
// date.getMinutes() : 분
// date.getSeconds() : 초