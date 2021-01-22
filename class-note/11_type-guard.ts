interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: "Tony", age: 33, skill: "Iron making" }; // 코드 상에서 모든 속성을 정의했음에도 불구하고
}

var tony = introduce();
console.log(tony.skill); // error : union 타입의 특성에 따라 공통된 속성인 name만 접근 가능

// 타입단언으로 타입의 범위를 좁히기, 구체화하기
// 가독성이 좋지 않음
if ((tony as Developer).skill) {
  var skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
}

// 타입가드 패턴
// function is타입 (파라미터 : 타입) : 파라미터 is 타입 {}
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}

interface Designer {
  name: string;
  awardCount: number;
}

function introduce2(): Developer | Person | Designer {
  return { name: "mari", age: 33, skill: "Iron making", awardCount: 20 }; // 코드 상에서 모든 속성을 정의했음에도 불구하고
}

var mari = introduce2();

function isDesigner(target: Developer | Person | Designer): target is Designer {
  return (target as Designer).awardCount !== undefined;
}

if (isDesigner(tony)) {
  console.log(tony.awardCount);
} else {
  console.log(tony.name); // Designer를 제외한 두 타입(Developer, Person)의 공통 속성만 접근 가능
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else if (isDesigner(tony)) {
  console.log(tony.awardCount);
} else {
  console.log(tony.name);
}
