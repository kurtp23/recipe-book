const express = require("express");
const authenticateToken = require("../auth/middleware/authenticateToken");
const router = express.Router();
const db = require("../models");

router.get("/view", (req, res) => {
  Promise.all([db.Recipe.findAll({}), db.Ingredient.findAll({})]).then((values) => {
    const recipes = values[0].map((el) => el.dataValues);
    const ingredients = values[1].map((el) => el.dataValues);
    res.render("recipes", { recipes: recipes, ingredients: ingredients, recName: "soup" });
  });
});
router.get("/", authenticateToken, (req, res) => {
  res.render("menu", {});
});
router.get("/login", (req, res) => {
  res.render("login", {});
});
router.get("/signUp", (req, res) => {
  res.render("newUser", {});
});
router.get("/newRecipe", (req, res) => {
  res.render("add", {});
});
router.get("/testAuth", authenticateToken, (req, res) => {
  res.render("testAuth", {});
});

router.get("/authenticate", (req, res) => {
  res.render("authenticate", {});
});

module.exports = router;
