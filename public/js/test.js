const postRecipe = document.getElementById("postRecipe");

postRecipe.addEventListener("click", (event) => {
  event.preventDefault();
  fetch("/testAdd", {
    method: "POST",
    headers: {
      "Authorization" : `Bearer ${localStorage.getItem("token")}`,
      "Content-Type" : "application/json",
    },
    body: JSON.stringify({
      title: "Roast Chicken",
      ingredients: [
        {
          name: "Salt",
          quantity: 1,
          measurement: "tbsp"
        },
        {
          name: "Pepper",
          quantity: .5,
          measurement: "tbsp"
        },
        {
          name: "Chicken",
          quantity: 1
        }
      ],
      instructions: [
        "1. Do something",
        "2. Do something else",
        "3. Done"
      ]
    })
  })
})