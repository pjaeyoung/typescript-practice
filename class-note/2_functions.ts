// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//   return a + b;
// }

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수의 타입을 정의하는 방식
function sum2(a: number, b: number): number {
  return a + b;
}

sum2(10); // 선언한 인자 개수 보다 적게 쓰면 에러 발생
sum2(10, 20, 30, 40); // 추가적인 인자를 넘기면 에러 발생, 파라미터 제한

// 옴셔널 파라미터
function log(a: string, b?: string) {}

log("hello ts");
log("hello ts", "abc");
