interface IPerson {
  name: string;
  age: number;
}

type Person = {
  name: string;
  age: number;
};

var mina: IPerson = {
  name: "미나",
  age: 27,
};

// 프리뷰로 구체적인 속성과 타입을 볼 수 있음
var seho: Person = {
  name: "세호",
  age: 30,
};

type MyString = string;
var str: MyString = "hello";

type Todo = { id: string; title: string; done: boolean };

function getTodo(todo: Todo) {}
