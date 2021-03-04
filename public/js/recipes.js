fetch("/api/viewRecipes", { method: "PUT" });

const listBtn = document.querySelectorAll(".collection-item");
console.log(listBtn);

for (var i = 0; i < listBtn.length; i++) {
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
