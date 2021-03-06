const express = require("express");
const authenticateToken = require("../auth/middleware/authenticateToken");
const db = require("../models");
const timeout = parseInt(require("../config/auth.json").timeout);
const validateLogin = require("../auth/validateLogin");

const router = express.Router();

router.post("/login", (req, res) => {
  res.clearCookie("access_token");
  const { username, password } = req.body;
  validateLogin({ username, password })
    .then((token) => {
      res.cookie("access_token", `Bearer ${token}`, {
        expires: new Date(Date.now() + timeout * 1000),
      });
      res.status(200).end();
    })
    .catch((err) => {
      res.status(401).end();
    });
});

router.post("/api/signUp", async (req, res) => {
  const { username, password } = req.body;
  const [user, isCreated] = await db.User.findOrCreate({
    where: { username },
    defaults: { password },
  });
  res.json({ isCreated }).end();
});

router.post("/api/addRecipe", authenticateToken, async (req, res) => {
  const { name, instructions, ingredients, isPublic } = req.body;
  const newRec = await db.Recipe.create({
    title: name,
    instructions: instructions,
    authorId: req.user.id,
    isPublic: isPublic,
  });

  ingredients.forEach(async (ing) => {
    const { name, quantity, measurement } = ing;
    const [ingredient, ingCreated] = await db.Ingredient.findOrCreate({ where: { name } });
    newRec.addIngredient(ingredient, { through: { quantity, measurement } });
  });

  res.status(200);
});

module.exports = router;
