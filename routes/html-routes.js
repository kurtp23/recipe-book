const express = require("express");
const authenticateToken = require("../auth/middleware/authenticateToken");
const router = express.Router();
const db = require("../models");

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
