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
  const { username, password } = req.body;
  db.Recipe.create({
    title: req.body.name,
    instructions: JSON.stringify(req.body.instructions),
  }).then(function (user) {
    // We have access to the new todo as an argument inside of the callback function

    res.json(user);
  });
  db.Ingredient.create({
    ingredient: JSON.stringify(req.body.ingredients),
    quantity: "0",
  }).then(function (user) {
    // We have access to the new todo as an argument inside of the callback function

    res.json(user);
  });
});
router.put("/api/viewRecipes", (req, res) => {
  db.Recipe.findAll({}).then(function (dbRecipe) {
    // We have access to the todos as an argument inside of the callback function
    console.log(dbRecipe);
    console.log(typeof dbRecipe);
    res.render("recipes", { recipes: dbRecipe });
  });
});

router.post("/testAuth", authenticateToken, (req, res) => {
  res.json({ username: req.username });
});

module.exports = router;
