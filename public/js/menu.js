//view/add recipe apiRoutes

const view = document.getElementById("view");

view.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("this is the button");
  fetch("/view", { method: "GET" });
});

// view.addEventListener("click", (event) => {
//   event.preventDefault();
//   fetch(`/`, { method: "GET" });
// });
