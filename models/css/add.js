const instruction = document.getElementById("instruction");
const instDiv = document.getElementById("instDiv");
const form = document.getElementById("card-content");
instruction.addEventListener("click", () => {
  var buttonHtml = `
    <div class="input-field col s6">
        <input value="Soup" id="first_name2" type="text" class="validate" />
        <label class="active">Recipe Name</label>
    </div>
  `;
  instDiv.append(buttonHtml);
});
