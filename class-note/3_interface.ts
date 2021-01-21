interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: "세호",
}; // 상호간의 약속, 항상 동일한 규칙으로 사용할 수 있게 함

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}

const capt = {
  name: "캡틴",
};
getUser(seho);
getUser(capt); // User 정의에 어긋남, age가 존재하지 않음

// 인터페이스는 api 요청시 받는 데이터 타입을 표시할 때 유용함

// 함수의 구조(인자, 반환값)에 인터페이스 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ["a", "b", "c"];
arr[0]; // 'a'
arr[0] = 10;

// 인덱싱 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /].js$/,
};

Object.keys(obj).forEach(function (value) {
  // value 가 string으로 추론됨
});

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

var dev: Developer = {
  language: "hi",
}; // Person에서 정의한 name, age를 속성으로 정의해야 에러가 사라짐
