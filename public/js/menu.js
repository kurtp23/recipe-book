//view/add recipe apiRoutes

const view = document.getElementById("view");
const add = document.getElementById("add");
view.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("this is the button");
  //   fetch("/view", { method: "GET" });
  window.location.replace("/view");
});

add.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("this is the button");
  //   fetch("/view", { method: "GET" });
  window.location.replace("/newRecipe");
});

// view.addEventListener("click", (event) => {
//   event.preventDefault();
//   fetch(`/`, { method: "GET" });
// });
