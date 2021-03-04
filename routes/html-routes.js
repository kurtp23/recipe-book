const express = require("express");
const authenticateToken = require("../auth/middleware/authenticateToken");
const db = require("../models");
const { Op } = require("sequelize");

const router = express.Router();

router.get("/view", authenticateToken, async (req, res) => {
  const userRecipes = await db.Recipe.findAll({
    where: {
      authorId: req.user.id
    },
    include: db.Ingredient
  });

  const titles = userRecipes.map((el) => ({
    title: el.title,
    id: el.id,
  }));

  // Selected recipe
  const dbRecipe = userRecipes[0];
  
  const ingredients = dbRecipe.dataValues.Ingredients.map(el => {
    const {name} = el.dataValues;
    const {quantity, measurement} = el.dataValues.RecIng.dataValues;
    return {name, quantity, measurement};
  });
  
  const json = {
    titles,
    recipe: {
      title: dbRecipe.title,
      ingredients,
      instructions: dbRecipe.instructions,
    },
  };
  res.render("recipes", json);
});
router.get("/recipe/:recipeId", authenticateToken, async (req, res) => {
  const { user } = req;
  const { recipeId } = req.params; 

  const userRecipes = await db.Recipe.findAll({
    where: {
      authorId: req.user.id
    },
    include: db.Ingredient
  });
  const titles = userRecipes.map(el => ({
    title: el.dataValues.title,
    id: el.dataValues.id,
  }));
  
  const dbRecipe = await db.Recipe.findOne({
    where: {
      [Op.and]: [
        { id: recipeId },
        { [Op.or]: [
          {authorId: user.id},
          {isPublic: true}
        ] }
      ]
    },
    include: db.Ingredient,
  });

  const ingredients = dbRecipe.dataValues.Ingredients.map(el => {
    const {name} = el.dataValues;
    const {quantity, measurement} = el.dataValues.RecIng.dataValues;
    return {name, quantity, measurement}
  });

  const json = {
    titles,
    recipe: {
      title: dbRecipe.dataValues.title,
      ingredients,
      instructions: dbRecipe.instructions
    }, 
  }
  res.render("recipes", json);
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
