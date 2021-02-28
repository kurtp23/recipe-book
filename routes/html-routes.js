const express = require("express");
const authenticateToken = require("../auth/middleware/authenticateToken");
const router = express.Router();
const db = require("../models");

router.get("/view", (req, res) => {
  db.Recipe.findAll({}).then( (dbRecipe) => {
    const recipes = dbRecipe.map(el => el.dataValues);
    res.render("recipes", {recipes: recipes});
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
router.get("/test", (req, res) => {
  res.render("test", {});
})
router.get("/authenticate", (req, res) => {
  res.render("authenticate", {})
})

module.exports = router;
