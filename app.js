// string 
console.log("string type");

// number
console.log(5+2);
console.log(5-2);
console.log(5*2);
console.log(5/2);

// variable const(ant) = cannot change
const a = 5;
const b = 2; 


// variable let = can change
let myName = "heewon";

// using variable
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log("hello " + myName);

myName = "hee1";
console.log("hello " + myName);

// boolean
const amIFat = true;
console.log(amIFat);

// null : 비어있는게 아닌 "아무것도 없는" 상태로 채워진 것
const amIOld = null;
console.log(amIOld);

// undefined : 
let something; // 값을 할당하지 않음
console.log(something);

// arrays
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat"; 
// const daysOfWeek = mon+tue+wed+thu+fri+sat+sun;
// console.log(daysOfWeek);

const daysOfWeek = [mon , tue , wed , thu , fri , sat];
console.log(daysOfWeek);
const nonsense = [1, 2, "hello", false, null, true, undefined, "hee1"];
console.log(nonsense);

console.log(daysOfWeek[0]);
daysOfWeek.push("sun"); // 배열 요소 추가하기
console.log(daysOfWeek);

const toBuy = ["potato", "tomato", "pizza"];
console.log(toBuy);
toBuy.push("kimbab"); // 배열 요소 추가하기
console.log(toBuy);

// object

// const palyerName = "heewon";
// const playerPoints = 121212;
// const playerHandsome = true;
// const playerFat = "little bit";

const player = {
    name: "heewon",
    points: 10,
    handsome: true,
    fat: "little bit", 
};

console.log(player); 
console.log(player.name); 
console.log(player.points); 
console.log(player.handsome); 
console.log(player.fat); 

player["age"] = 20; // object 속성 추가하기
console.log(player.age); 

