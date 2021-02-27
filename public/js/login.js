const loginBTn = document.getElementById("loginBtn");
// addUser.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log(newUser.value);
// });
loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(userName.value);
  console.log(password.value);
  fetch(`/api/login`, {

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  fetch(`/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName: userName.value,
      password: password.value,
    }),
  });
    body: JSON.stringify({username, password})
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    localStorage.setItem("token", data.token);
  })
});
