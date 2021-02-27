const newUser = document.getElementById("newUser");
const addUser = document.getElementById("addUser");
const newPass = document.getElementById("newPassword");
// addUser.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log(newUser.value);
// });
addUser.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(newUser.value);
  console.log(newPass.value);
  fetch(`/api/signUp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: newUser.value,
      password: newPass.value,
    }),
  });
});
