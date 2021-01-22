// 타입 추론 기본 1
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

// 타입 추론 기본 2
interface DropDown<T> {
  value: T;
  title: string;
}

var shoppingItem: DropDown<string> = {
  value: "abc", // Dropdown<string>.value : string 추론
  title: "hello",
};

// 타입 추론 기본 3
// 제네릭을 확장한 제네릭 인터페이스로 타입의 경우
// 호출시점에서 타입이 확장 제네릭 인터페이스에도 전달되는 형태
interface DetailedDropDown<K> extends DropDown<K> {
  description: string;
  tag: K;
}

var detailedItem: DetailedDropDown<string> = {
  title: "ab",
  description: "abc",
  value: "",
  tag: "",
};

var detailedItem: DetailedDropDown<number> = {
  title: "ab",
  description: "abc",
  value: 10,
  tag: 1,
};

// Best Common Type : 자바스크립트 코드가 어떤 타입인지 추론하는 알고리즘, union으로 타입을 묶어 나감
var arr = [1, 2, true, false, "abc"];
