const express = require("express");
const authenticateToken = require("../auth/middleware/authenticateToken");
const db = require("../models");
const timeout = parseInt(require("../config/auth.json").timeout);
const validateLogin = require("../auth/validateLogin");

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  validateLogin({ username, password })
    .then((token) => {
      res.cookie("access_token", `Bearer ${token}`, {
        expires: new Date(Date.now() + timeout * 1000),
      });
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.status(401).end();
    });
});

router.post('/api/signUp', async (req, res) => {
  const { username, password } = req.body;
  const [user, created] = await db.User.findOrCreate({
    where: { username },
    defaults: { password },
  });
  const message = created ? "User has already been created!" : "New user created";
  res.json({ message });
});

router.post("/api/addRecipe", authenticateToken, async (req, res) => {

  const {name, instructions, ingredients} = req.body;
  const newRec = await db.Recipe.create({
    title: name,
    instructions: instructions,
    authorId: req.user.id,
  });

  ingredients.forEach(async (ing) => {
    const { name, quantity, measurement } = ing;
    const [ingredient, ingCreated] = await db.Ingredient.findOrCreate({ where: { name } });
    newRec.addIngredient(ingredient, { through: { quantity, measurement } });
  });

  res.status(200);
});

router.put("/api/viewRecipes", (req, res) => {
  db.Recipe.findAll({}).then((dbRecipe) => {
    const recipes = dbRecipe.map((el) => el.dataValues);
    console.log(recipes);
    res.render("recipes", { recipes: recipes });
  });
});

router.post("/testAuth", authenticateToken, (req, res) => {
  res.json({ username: req.username });
});

router.post("/testAdd", authenticateToken, async (req, res) => {
  const { username } = req;
  const { title, instructions, ingredients } = req.body;
  const user = await db.User.findOne({ where: { username } });

  const [recipe, recCreated] = await db.Recipe.findOrCreate({
    where: { title },
    defaults: { instructions, authorId: user.id },
  });

  // ing = {
  //     name: 'Salt',
  //     quantity: '1',
  //     measurement: 'tbsp'
  // }
  if (!recCreated) {
    ingredients.forEach(async (ing) => {
      const { name, quantity, measurement } = ing;
      console.log(`PARAMETERS:\n     quantity: ${quantity}\n     measurement: ${measurement}\n`);
      const [ingredient, ingCreated] = await db.Ingredient.findOrCreate({ where: { name } });
      console.log(`INGREDIENT: ${JSON.stringify(ingredient)}`);
      recipe.addIngredient(ingredient, { through: { quantity, measurement } });
    });
  }
  const result = await db.Recipe.findOne({
    where: { title },
    include: db.Ingredient,
  });
  console.log(JSON.stringify(result));
  res.status(200);
});

router.post('/testView', authenticateToken, async (req, res) => {
// test view recipes owned by user
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
});

module.exports = router;
