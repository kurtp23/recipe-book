const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/view", (req, res) => {
  db.Recipe.findAll({}).then( (dbRecipe) => {
    const recipes = dbRecipe.map(el => el.dataValues);
    res.render("recipes", {recipes: recipes});
  });
});
router.get("/", (req, res) => {
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
router.get("/testAuth", (req, res) => {
  res.render("testAuth", {});
});
module.exports = router;
