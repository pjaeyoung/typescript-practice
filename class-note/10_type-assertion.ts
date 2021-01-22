// 타입 단언(type assertion)
var a;
a = 10;
a = "abc";
var b1 = a; // a가 중간에 값이 변경되어도 맨 처음 선언한 any타입으로 b의 타입이 추론됨.
// 타입스크립트보다 개발자가 더 확실히 타입을 알고 있으니 개발자가 지정한 타입으로 간주하라.
// 개발자의 눈으로 확실히 string값이 올 것이라 판단되면 'as'를 사용해서 b의 타입을 string으로 추론하게 만듬
var b2 = a as string;

// 사용 예제 : DOM API - 웹페이지의 태그정보를 접근/조작할 수 있는 API

<div id="app">hi</div>;

var div = document.querySelector("#app"); // Element | null 로 추론
var div2 = document.querySelector("div"); // HTMLDivElement | null 로 추론

if (div2) {
  // div2가 null인지 파악하는 과정을 따로 진행해야 함
  div2.innerHTML = "hello";
}

var div3 = document.querySelector("div") as HTMLDivElement; // 코드가 돌아가는 시점에 div 태그가 반드시 존재함을 명시
