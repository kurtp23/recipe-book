const instruction = document.getElementById("instruction");
const instDiv = document.getElementById("instDiv");
const form = document.getElementById("card-content");
let buttonHtml;
instruction.addEventListener("click", () => {
  const div = document.createElement("div");
  const inp = document.createElement("input");
  const lab = document.createElement("label");

  inp.setAttribute("class", "validate");
  inp.setAttribute("type", "text");
  inp.setAttribute("value", "New Instruction");

  lab.setAttribute("class", "active");
  lab.textContent = "instruction";

  div.appendChild(inp);
  div.appendChild(lab);

  div.setAttribute("class", "input-field col s6");

  instDiv.append(div);
});
