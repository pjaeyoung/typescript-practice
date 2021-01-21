// JS 문자열 선언
// var str = "hello";

// TS 문자열 선언
let str: string = "hello";

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ["Captin", "Thor", "Hulk", 10];
let items: number[] = [1, 2, 3];

let strNumArr1: Array<string | number> = ["a", 1, 2];
let strNumArr2: (string | number)[] = ["a", 1, 2];

// TS 튜플 : 배열 각 요소에 타입 지정
let address: [string, number] = ["gangnam", 100];

// TS 객체
let obj: object = {};
// let person: object = {
//   name: "capt",
//   age: 100,
// };

let person: { name: string; age: number } = {
  name: "thor",
  age: 1000,
};

// TS 진위값
let show: boolean = true;
