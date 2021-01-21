// const emails: Email[] = [
//     { value: "naver.com", selected: true },
//     { value: "gmail.com", selected: false },
//     { value: "hanmail.net", selected: false },
//   ];
var emails = [
    { value: "naver.com", selected: true },
    { value: "gmail.com", selected: false },
    { value: "hanmail.net", selected: false },
];
// const numberOfProducts: ProductNumber[] = [
//     { value: 1, selected: true },
//     { value: 2, selected: false },
//     { value: 3, selected: false },
//   ];
var numberOfProducts = [
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
function createDropdownItem(item) {
    var option = document.createElement("option");
    option.value = item.value.toString();
    option.innerText = item.value.toString();
    option.selected = item.selected;
    return option;
}
function createDropdownItems(items, selectTag) {
    items.forEach(function (item) {
        var option = createDropdownItem(item);
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
createDropdownItems(emails, document.querySelector("#email-dropdown"));
createDropdownItems(numberOfProducts, document.querySelector("#product-dropdown"));
