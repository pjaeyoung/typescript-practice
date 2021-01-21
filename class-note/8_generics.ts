function logText(text) {
  console.log(text);
  return text;
}

logText(10); // 숫자 10
logText("하이"); // 문자열 하이
logText(true); // 진위값 true

// 인자 타입은 다르나 똑같은 로직 => 유지보수 측면에서 좋지 않음
function logText2(text: string) {
  console.log(text);
  // text.split('').reverse().join('');
  return text;
}

function logNumber(num: number) {
  console.log(num);
  return num;
}

// union으로 개선
// 인자 타입의 교집합 api, 속성만 사용가능하다는 문제가 남음
function logTextUnion(text: string | number) {
  console.log(text);
  return text;
}

// generic으로 개선
function logTextGeneric<T>(text: T): T {
  console.log(text);
  return text;
}

// 호출 시점에 타입을 정의
// 타입을 추론하여 최종 반환값의 타입 지정
logTextGeneric<number>(10);
logTextGeneric<boolean>(true);
const str = logTextGeneric<string>("하이");
str.split("");

const login = logTextGeneric<boolean>(true);

// 인터페이스에 제네릭 선언하는 방법
interface DropDown<T> {
  value: T;
  selected: boolean;
}

const obj: DropDown<string> = { value: "abc", selected: false };
const obj2: DropDown<number> = { value: 10, selected: false };
