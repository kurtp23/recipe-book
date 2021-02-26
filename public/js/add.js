const instruction = document.getElementById("instruction");
const instDiv = document.getElementById("instDiv");
const form = document.getElementById("card-content");
const save = document.getElementById("save");
const addIng = document.getElementById("addIngredient");
const rIng = document.querySelector("#ingredient");
const rName = document.querySelector("#recipe-name");
const rInst = document.querySelector(".instructions");
const allIng = [];

instruction.addEventListener("click", () => {
  const div = document.createElement("div");
  const inp = document.createElement("input");
  const lab = document.createElement("label");

  inp.setAttribute("class", "instructions");
  inp.setAttribute("type", "text");
  inp.setAttribute("value", "New Instruction");

  lab.setAttribute("class", "active");

  lab.textContent = "instruction";

  div.appendChild(inp);
  div.appendChild(lab);

  div.setAttribute("class", "input-field col s6");

  instDiv.append(div);
});

save.addEventListener("click", (event) => {
  event.preventDefault();
  const rInst = document.querySelectorAll(".instructions");
  rInst.forEach((instruction) => {
    console.log(instruction.value);
  });
  console.log(rName.value, rIng.value);
  console.log(rIng.value);
});

addIng.addEventListener("click", (event) => {
  event.preventDefault();
  allIng.push(rIng.value);
  console.log(allIng);
});
