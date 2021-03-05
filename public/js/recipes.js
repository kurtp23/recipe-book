const listBtn = document.querySelectorAll(".collection-item");
const searchBtn = document.getElementById("searchBtn");
for (let i = 0; i < listBtn.length; i++) {
  listBtn[i].addEventListener(
    "click",
    (event) => {
      const btnId = this.getElementsByClassName("id").value;
      event.preventDefault();
      console.log(btnId);
    },
    false
  );
}

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const searchString = document.getElementById("search").value;
  window.location.replace(`/search/${searchString}`)
})
