const loginBTn = document.getElementById("loginBtn");
// addUser.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log(newUser.value);
// });
loginBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  fetch(`/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
<<<<<<< HEAD
    body: JSON.stringify({username, password})
  }).then(()=> {window.location.replace("/")})
=======
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("token", data.token);
      window.location.reload();
    });
>>>>>>> main
});
