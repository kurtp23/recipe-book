const userName = document.getElementById("UserName");
const loginBTn = document.getElementById("loginBtn");
// addUser.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log(newUser.value);
// });
loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(userName.value);
});
