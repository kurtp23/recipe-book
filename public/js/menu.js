//view/add recipe apiRoutes

const view = document.getElementById("view");

view.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("this is the button");
  //   fetch("/view", { method: "GET" });
  window.location.replace("/view");
});

// view.addEventListener("click", (event) => {
//   event.preventDefault();
//   fetch(`/`, { method: "GET" });
// });
