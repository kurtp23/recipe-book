const express = require("express");
const router = express.Router();
const authenticate = require("../auth/authenticate");

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  authenticate({ username, password })
    .then((token) => res.json(token))
    .catch((err) => {
      console.log(err);
      res.status(401).end();
    });
});

router.post("/api/addRecipe", (req, res) => {
  console.log(req.body);
  res.status(200).end();
});
router.post("/api/login", (req, res) => {
  console.log(req.body);
});
router.post("/api/newUser", (req, res) => {
  console.log(req.body);
});
module.exports = router;
