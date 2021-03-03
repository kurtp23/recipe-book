const express = require('express');
const authenticateToken = require('../auth/middleware/authenticateToken');
const db = require('../models');

const router = express.Router();

<<<<<<< HEAD
router.get("/view", authenticateToken, async (req, res) => {
  const { username } = req;
  const user = await db.User.findOne({
    where: { username },
    include: {
      model: db.Recipe,
      include: db.Ingredient,
    },
  });
  const dbRecipes = user.dataValues.Recipes;

  const recipes = dbRecipes.map((dbRecipe) => dbRecipe.dataValues);
  console.log(recipes);
  const titles = recipes.map((el) => ({
    title: el.title,
    id: el.id,
  }));
  console.log(titles);

  res.render("recipes", { titles, recipe: recipes[0] });
});
router.get("/recipe/:id");
router.get("/", authenticateToken, (req, res) => {
  res.render("menu", {});
=======
router.get('/view', (req, res) => {
  // db.RecIng.findAll({
  //   where: {
  //     recId: recipe.id,
  //   },
  // });

  Promise.all([db.Recipe.findAll({}), db.Ingredient.findAll({})]).then((values) => {
    const recipes = values[0].map((el) => el.dataValues.title);
    const instructions = values[0].map((el) => el.dataValues.instructions);
    const ingredients = values[1].map((el) => el.dataValues.ingredient);
    // console.log(recipes);
    // console.log(recipes[2]);
    // console.log(JSON.parse(instructions[2]));
    // console.log(JSON.parse(ingredients[1]));
    // db.Ingredient.get();
    const json = {
      recipes: [{ name: 'q' }, { name: 'w' }, { name: 'e' }],
      recipe: {
        name: 'Chicken Tikka Masala',
        instructions: ['Let simmer until coooked'],
        ingredients: ['chicken'],
      },
    };

    res.render('recipes', json);
  });
});
router.get('/', authenticateToken, (req, res) => {
  res.render('menu', {});
>>>>>>> main
});
router.get('/login', (req, res) => {
  res.render('login', {});
});
router.get('/signUp', (req, res) => {
  res.render('newUser', {});
});
<<<<<<< HEAD
router.get("/newRecipe", authenticateToken, (req, res) => {
  res.render("add", {});
=======
router.get('/newRecipe', (req, res) => {
  res.render('add', {});
>>>>>>> main
});
router.get('/testAuth', authenticateToken, (req, res) => {
  res.render('testAuth', {});
});
router.get('/test', (req, res) => {
  res.render('test', {});
});
router.get('/authenticate', (req, res) => {
  res.render('authenticate', {});
});

module.exports = router;
