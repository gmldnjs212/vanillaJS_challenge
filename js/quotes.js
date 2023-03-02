const quotes = [
    {
        quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
        author: "- 단테 -",
    },
    {
        quote: "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다",
        author: "- 톰 모나건 -",
    },
    {
        quote: "진정으로 웃으려면 고통을 참아야 하며 나아가 고통을 즐길 줄 알아야 한다",
        author: "- 찰리 채플린 -",
    },
    {
        quote: "먼저 자신을 비웃어라 다른 사람이 당신을 비웃기 전에",
        author: "- 엘사 맥스웰 -",
    },
    {
        quote: "어리석은 자는 멀리서 행복을 찾고 현명한 자는 자신의 발치에서 행복을 키워간다",
        author: "- 제임스 오펜하임 -",
    },
    {
        quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다",
        author: "- 앙드레 말로 -",
    },
    {
        quote: "행복은 습관이다 그것을 몸에 지녀라",
        author: "- 허버드 -",
    },
    {
        quote: "자신감 있는 표정을 지으면 자신감이 생긴다",
        author: "- 찰스다윈 -",
    },
    {
        quote: "평생 살 것처럼 꿈을 꾸어라 그리고 내일 죽을 것처럼 오늘을 살아라",
        author: "- 제임스 딘 -",
    },
    {
        quote: "인간이 불행한 이유는 자신이 행복하다는 사실을 모르기 때문이다 단지 그뿐이다",
        author: "- 표도르 도스토옙스키 -",
    },   
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 0~1사이의 난수를 배열안의 요소개수만큼 곱한 뒤 내림(버림) 처리
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;