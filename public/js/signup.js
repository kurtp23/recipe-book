const newUser = document.getElementById('newUser');
const addUser = document.getElementById('addUser');
const newPass = document.getElementById('newPassword');
const resMsg = document.getElementById('resMsg');

// addUser.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log(newUser.value);
// });
addUser.addEventListener('click', (event) => {
  event.preventDefault();
  fetch('/api/signUp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: newUser.value,
      password: newPass.value,
    }),
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.isCreated);
    const [message, isCreated, cssColor] = 
      data.isCreated 
        ? ["User created. Redirecting to login...", true, ["green-text", "text-darken-3"]]
        : ["Username already existed", false, ["red-text", "text-darken-3"]];
    resMsg.textContent = message;
    resMsg.classList.add(...cssColor);
    resMsg.style.display = "block";
    if (isCreated) {
      setInterval(function(){ window.location.replace("/")}, 3000);
    }
  });
});
