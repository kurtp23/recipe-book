const express = require("express");
const authenticateToken = require("../auth/middleware/authenticateToken");
const db = require("../models");

const router = express.Router();

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
  // console.log(recipes[0].Ingredients[0].dataValues.name);
  //console.log(recipes[0].Ingredients[0].dataValues.RecIng.dataValues.quantity);
  //console.log(recipes[0].Ingredients[0].dataValues.RecIng.dataValues.measurement);
  const instructions = JSON.parse(recipes[0].instructions);
  //console.log(instructions);
  const json = {
    title: titles,
    recipe: recipes[0],
    instructions: JSON.parse(instructions),
  };
  console.log(json);
  //front end event send id to refrence/ get recipes for id middleware/ api route to get id
  res.render("recipes", json);
});
router.get("/recipe/:id");
router.get("/", authenticateToken, (req, res) => {
  res.render("menu", {});
});
router.get("/login", (req, res) => {
  res.render("login", {});
});
router.get("/signUp", (req, res) => {
  res.render("newUser", {});
});
router.get("/newRecipe", authenticateToken, (req, res) => {
  res.render("add", {});
});
router.get("/testAuth", authenticateToken, (req, res) => {
  res.render("testAuth", {});
});
router.get("/test", (req, res) => {
  res.render("test", {});
});
router.get("/authenticate", (req, res) => {
  res.render("authenticate", {});
});

module.exports = router;
