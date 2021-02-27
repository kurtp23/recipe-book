const express = require("express");
const authenticateToken = require("../auth/middleware/authenticateToken");
const router = express.Router();
const validateLogin = require("../auth/validateLogin");
const db = require("../models");

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  validateLogin({ username, password })
    .then((token) => {
      res.json({ token });
    })
    .catch((err) => {
      console.log(err);
      res.status(401).end();
    });
});

router.post("/api/signUp", (req, res) => {
  const { username, password } = req.body;
  db.User.create({
    username: req.body.username,
    password: req.body.password,
  }).then(function (user) {
    // We have access to the new todo as an argument inside of the callback function

    res.json(user);
  });
});

router.post("/api/addRecipe", (req, res) => {
  const {name, instructions, ingredients} = req.body;
  console.log(`title: ${name}\ninstructions: ${JSON.stringify(instructions)}\ningredient: ${JSON.stringify(ingredients)}`)
  
  db.Recipe.create({
    title: name,
    instructions: JSON.stringify(instructions),
  })

  db.Ingredient.create({
    ingredient: JSON.stringify(ingredients),
    quantity: "0",
  })
  res.status(200)
});

router.put("/api/viewRecipes", (req, res) => {
  db.Recipe.findAll({}).then( (dbRecipe) => {
    const recipes = dbRecipe.map(el => el.dataValues);
    console.log(recipes);
    res.render("recipes", {recipes: recipes});
  });
});

router.post("/testAuth", authenticateToken, (req, res) => {
  res.json({ username: req.username });
});

module.exports = router;
