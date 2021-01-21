class CPerson {
  // 최상단에 멤버변수 타입 선언
  private name: string;
  public age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// 클래스는 점차 볼 일이 없어짐

// 리액트 예전 문법 - 클래스 기반 코드
class App extends React.Component {}

// 리액트 최신 문법 - 훅 기반 함수형 코드
function App() {
  return <div>Hello World</div>;
}
