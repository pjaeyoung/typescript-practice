// Union 타입 : 한 가지 이상 타입 사용할 때
function logMessage(value: string | number) {
  if (typeof value === "number") {
    // value 속성으로 number의 api 볼 수 있음 ( any에서는 사용 불가 )
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}

logMessage("hello");
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  someone.name; // union 에 선언된 타입의 공통 속성인 name만 접근 가능!
}
