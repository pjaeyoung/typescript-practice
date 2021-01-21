// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var $username = document.querySelector("#username");
var $email = document.querySelector("#email");
var $address = document.querySelector("#address");

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url).then((res) => res.data);
}

function startApp() {
  fetchUser()
    .then(function (user) {
      // TODO: 이름, 이메일, 주소 표시하기
      $username.innerText = user.name;
      $email.innerText = user.email;
      $address.innerText = `${user.address.street} ${user.address.city}`;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
