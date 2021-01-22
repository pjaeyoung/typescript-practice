var a; // 에디터 내장된 language server에서 any 로 추론
var a = 10; // a : number
var a = "abc"; // a : string

function getB(b) {
  // 파라미터 타입으로 return 타입 지정
  // function getB(b:any):any
  return b;
}

function getB(b = 10) {
  // 파라미터 default 값으로 타입 추론
  // function getB(b?: number):number
  return b;
}

function getB(b = 10) {
  // function getB(b?: number):string
  var c = "hi";
  return b + c; // javascript는 숫자와 문자열을 + 연산자로 연산했을 때 숫자를 문자열로 변환한다는 특징으로 반환값이 string으로 추론
}
