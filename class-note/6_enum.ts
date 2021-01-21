// 숫자형 enum
enum Shoes {
  Nike,
  Adidas,
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 0

// 문자형 enum
enum ShoesStr {
  Nike = "나이키",
  Adidas = "아디다스 ",
}

var myShoes2 = ShoesStr.Nike;
console.log(myShoes2);

// enum 활용 사례

enum Answer {
  Yes = "Y",
  No = "N",
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답입니다. ");
  }
  if (answer === Answer.No) {
    console.log("오답입니다.");
  }
}

askQuestion("예스");
askQuestion("y");
askQuestion("Yes");
askQuestion(Answer.Yes); // enum에서 제공되는 값만 넘길 수 있음 , dropdown 등 목록에서 정의해 쓸 때 정확한 코드 작성을 위함
