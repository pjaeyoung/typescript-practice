// 인터페이스, 클래스
interface Developer {
  name: string;
  skill: string;
}

class Person {
  name: string;
}

var developer: Developer;
var person: Person;

developer = person; // error : 타입 호환이 되기 위해서는 오른쪽 할당하려는 값의 타입이 구조적으로 더 큰 경우여야 함
person = developer;

// 함수
var add = function (a: number) {
  // ..
};

var sum = function (a: number, b: number) {
  // ..
};

sum = add;
add = sum; // error: sum 은 add 보다 구조적으로 더 크다. (인자를 하나 더 받음 )

// 제네릭
interface Empty<T> {
  //..
}

var empty1: Empty<string>;
var empty2: Empty<number>;
// 구조적으로 차이가 없기 때문에 둘 다 호환 가능
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
// 구조적으로 data:string과 data:number 차이가 있기 때문에 둘 다 호환 불가능
notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;
