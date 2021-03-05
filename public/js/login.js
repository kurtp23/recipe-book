const loginBtn = document.getElementById('loginBtn');
const errorMsg = document.getElementById('errorMsg');

loginBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  }).then((response) => {
    if (response.status === 200)
      window.location.replace('/');
    else {
      errorMsg.textContent = "Wrong Credentials!";
      errorMsg.style.display = "block";
    }
  });
});
