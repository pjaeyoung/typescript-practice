// interface Email {
//   value: string;
//   selected: boolean;
// }

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

// const emails: Email[] = [
//     { value: "naver.com", selected: true },
//     { value: "gmail.com", selected: false },
//     { value: "hanmail.net", selected: false },
//   ];

const emails: DropdownItem<string>[] = [
  { value: "naver.com", selected: true },
  { value: "gmail.com", selected: false },
  { value: "hanmail.net", selected: false },
];

// const numberOfProducts: ProductNumber[] = [
//     { value: 1, selected: true },
//     { value: 2, selected: false },
//     { value: 3, selected: false },
//   ];

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// function createDropdownItem(item: Eamil | ProductNumber) {
//     const option = document.createElement("option");
//     option.value = item.value.toString();
//     option.innerText = item.value.toString();
//     option.selected = item.selected;
//     return option;
//   }

function createDropdownItem<T>(item: DropdownItem<T>) {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

function createDropdownItems<T>(
  items: DropdownItem<T>[],
  selectTag: Element
): void {
  items.forEach(function (item) {
    const option = createDropdownItem<T>(item);
    selectTag.appendChild(option);
  });
}

// // NOTE: 이메일 드롭 다운 아이템 추가
// emails.forEach(function (email) {
//   const item = createDropdownItem<string>(email);
//   const selectTag = document.querySelector("#email-dropdown");
//   selectTag.appendChild(item);
// });

// // NOTE: 아이템 수량 드롭 다운 아이템 추가
// numberOfProducts.forEach(function (product) {
//   const item = createDropdownItem<number>(product);
//   const selectTag = document.querySelector("#product-dropdown");
//   selectTag.appendChild(item);
// });

createDropdownItems<string>(emails, document.querySelector("#email-dropdown"));
createDropdownItems<number>(
  numberOfProducts,
  document.querySelector("#product-dropdown")
);
