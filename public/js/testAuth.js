const getUser = document.getElementById('getUser');
const recipeView = document.getElementById('recipeView');
getUser.addEventListener('click', (event) => {
  event.preventDefault();

  fetch('/testAuth', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.username);
    });
});
recipeView.addEventListener('click', (event) => {
  event.preventDefault();
  fetch('/testAdd', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'Roast Chicken',
    }),
  });
});
