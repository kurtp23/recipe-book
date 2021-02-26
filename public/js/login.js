const userName = document.getElementById("UserName");
const loginBTn = document.getElementById("loginBtn");
const password = document.getElementById("password");
// addUser.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log(newUser.value);
// });
loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(userName.value);
  console.log(password.value);
  fetch(`/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName: userName.value,
      password: password.value,
    }),
  });
});
