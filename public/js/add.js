const instruction = document.getElementById("instruction");
const instDiv = document.getElementById("instDiv");
const form = document.getElementById("card-content");
const save = document.getElementById("save");
const addIng = document.getElementById("addIngredient");
const addInst = document.getElementById("addInstruction");
const rIng = document.querySelector("#ingredient");
const rName = document.querySelector("#recipe-name");
const rInst = document.querySelector("#instruction");
const listIng = document.getElementById("listIng");
const listInst = document.getElementById("listInst");
const addName = document.getElementById("addName");
const recName = document.getElementById("recipeName");
const amount = document.getElementById("amount");
const measure = document.getElementById("measure");
const allIng = [];
const allInst = [];
const allMeasure = [];
const allAmount = [];

addName.addEventListener("click", (event) => {
  event.preventDefault();
  recName.textContent = rName.value;
});

addInst.addEventListener("click", (event) => {
  event.preventDefault();

  allInst.push(rInst.value);
  console.log(allInst);
  const li = document.createElement("li");
  li.textContent = amount.value + measure.value + rInst.value;
  listInst.append(li);
});

addIng.addEventListener("click", (event) => {
  event.preventDefault();
  allMeasure.push(measure.value);
  allAmount.push(amount.value);
  allIng.push(rIng.value);
  console.log(allIng, allAmount, allMeasure);
  const li = document.createElement("li");
  li.textContent = `${amount.value} ${measure.value} ${rIng.value}`;
  listIng.append(li);
});

save.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(rName.value);
  console.log(allIng);
  console.log(allInst);
  fetch(`/api/addRecipe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: rName.value,
      ingredients: allIng,
      amounts: allAmount,
      measurements: allMeasure,
      instructions: allInst,
    }),
  });
});
//maybe make ingridients an array of objects

//add below to body to push the arrays of amounts and measurments
// amounts: allAmount,
// measurements: allMeasure,
