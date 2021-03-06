const instruction = document.getElementById('instruction');
const instDiv = document.getElementById('instDiv');
const form = document.getElementById('card-content');
const save = document.getElementById('save');
const addIng = document.getElementById('addIngredient');
const addInst = document.getElementById('addInstruction');
const rIng = document.querySelector('#ingredient');
const rName = document.querySelector('#recipe-name');
const rInst = document.querySelector('#instruction');
const listIng = document.getElementById('listIng');
const listInst = document.getElementById('listInst');
const recCard = document.getElementById('recipeCard');
const addName = document.getElementById('addName');
const recName = document.getElementById('recipeName');
const amount = document.getElementById('amount');
const measure = document.getElementById('measure');
const makePublic = document.getElementById('makePublic');
const allIng = [];
const allInst = [];
let recipeName = '';

addName.addEventListener('click', (event) => {
  event.preventDefault();
  recName.textContent = rName.value;
  recipeName = rName.value;
  rName.value = '';

  if (recCard.classList.contains('hide')) {
    recCard.classList.remove('hide').classList.add('show');
  }
});

addInst.addEventListener('click', (event) => {
  event.preventDefault();

  allInst.push(rInst.value);
  const li = document.createElement('li');
  li.textContent = rInst.value;
  listInst.append(li);
  rInst.value = '';

  if (recCard.classList.contains('hide')) {
    recCard.classList.remove('hide').classList.add('show');
  }
});

addIng.addEventListener('click', (event) => {
  event.preventDefault();
  const ingredient = {
    name: rIng.value,
    quantity: amount.value,
    measurement: measure.value,
  };

  allIng.push(ingredient);
  const li = document.createElement('li');
  li.textContent = `${amount.value} ${measure.value} ${rIng.value}`;
  listIng.append(li);
  amount.value = '';
  measure.value = '';
  rIng.value = '';

  if (recCard.classList.contains('hide')) {
    recCard.classList.remove('hide').classList.add('show');
  }
});

save.addEventListener('click', (event) => {
  event.preventDefault();
  fetch('/api/addRecipe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: recipeName,
      instructions: allInst,
      ingredients: allIng,
      isPublic: makePublic.checked,
    }),
  });
});
// maybe make ingridients an array of objects

// add below to body to push the arrays of amounts and measurments
// amounts: allAmount,
// measurements: allMeasure,
