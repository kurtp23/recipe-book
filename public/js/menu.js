// view/add recipe apiRoutes

const view = document.getElementById('view');
const add = document.getElementById('add');
view.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.replace('/view');
});

add.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.replace('/newRecipe');
});
