const express = require('express');
const { Op } = require('sequelize');
const authenticateToken = require('../auth/middleware/authenticateToken');
const db = require('../models');

const router = express.Router();

router.get('/view', authenticateToken, async (req, res) => {
  const userRecipes = await db.Recipe.findAll({
    where: { authorId: req.user.id },
    include: db.Ingredient,
  });

  if (!userRecipes.length) {
    return res.render('error', { message: 'You have not created any recipe' });
  }

  const titles = userRecipes.map((el) => ({
    title: el.title,
    id: el.id,
  }));

  // Selected recipe
  const dbRecipe = userRecipes[0];

  const ingredients = dbRecipe.dataValues.Ingredients.map((el) => {
    const { name } = el.dataValues;
    const { quantity, measurement } = el.dataValues.RecIng.dataValues;
    return { name, quantity, measurement };
  });

  const json = {
    titles,
    recipe: {
      title: dbRecipe.title,
      ingredients,
      instructions: dbRecipe.instructions,
    },
  };
  res.render('recipes', json);
});
router.get('/recipe/:recipeId', authenticateToken, async (req, res) => {
  const { user } = req;
  const { recipeId } = req.params;

  const userRecipes = await db.Recipe.findAll({
    where: {
      authorId: req.user.id,
    },
    include: db.Ingredient,
  });
  const titles = userRecipes.map((el) => ({
    title: el.dataValues.title,
    id: el.dataValues.id,
  }));

  const dbRecipe = await db.Recipe.findOne({
    where: {
      [Op.and]: [{ id: recipeId }, { [Op.or]: [{ authorId: user.id }, { isPublic: true }] }],
    },
    include: db.Ingredient,
  });

  if (!dbRecipe) {
    return res.render('error', { message: 'Recipe does not exist or is set to private' });
  }

  const ingredients = dbRecipe.dataValues.Ingredients.map((el) => {
    const { name } = el.dataValues;
    const { quantity, measurement } = el.dataValues.RecIng.dataValues;
    return { name, quantity, measurement };
  });

  const json = {
    titles,
    recipe: {
      title: dbRecipe.dataValues.title,
      ingredients,
      instructions: dbRecipe.instructions,
    },
  };
  res.render('recipes', json);
});
router.get('/', authenticateToken, (req, res) => {
  res.render('menu', {});
});
router.get('/login', (req, res) => {
  res.render('login', {});
});
router.get('/signUp', (req, res) => {
  res.render('newUser', {});
});
router.get('/newRecipe', authenticateToken, (req, res) => {
  res.render('add', {});
});

router.get('/search/:keyword', authenticateToken, async (req, res) => {
  const { keyword } = req.params;
  const userSearch = await db.User.findAll({
    where: { username: { [Op.substring]: keyword } },
    include: db.Recipe,
  });
  const ingredientSearch = await db.Ingredient.findAll({
    where: { name: { [Op.substring]: keyword } },
    include: db.Recipe,
  });

  const rawResults = [];

  userSearch.forEach((el) => el.dataValues.Recipes.forEach((re) => rawResults.push(re.id)));
  ingredientSearch.forEach((el) => el.dataValues.Recipes.forEach((re) => rawResults.push(re.id)));

  rawResults.sort();

  const results = rawResults.length ? [rawResults[0]] : [];
  for (let i = 1; i < rawResults.length; i++) {
    if (rawResults[i] !== rawResults[i - 1]) results.push(rawResults[i]);
  }

  const recipeSearch = await db.Recipe.findAll({
    attributes: ['title', 'id'],
    where: {
      [Op.or]: [
        {
          [Op.and]: [
            { title: { [Op.substring]: keyword } },
            { [Op.or]: [{ isPublic: true }, { authorId: req.user.id }] },
          ],
        },
        {
          [Op.and]: [{ id: results }, { [Op.or]: [{ isPublic: true }, { authorId: req.user.id }] }],
        },
      ],
    },
  });
  const titles = recipeSearch.map((el) => ({
    title: el.title,
    id: el.id,
  }));

  res.render('search', { titles });
});

router.get('*', (req, res) => {
  res.render('error', { message: 'Page Not Found' });
});

module.exports = router;
