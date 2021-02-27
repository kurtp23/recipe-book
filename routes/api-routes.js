const express = require("express");
const authenticateToken = require("../auth/middleware/authenticateToken");
const router = express.Router();
const validateLogin = require("../auth/validateLogin");

router.post("/login", (req, res) => {
    const {username, password} = req.body;
    validateLogin({username, password})
    .then(token => {
      res.json({token})
    })
    .catch(err => {
        console.log(err);
        res.status(401).end();
    });
})

router.post("/api/addRecipe", (req, res) => {
  console.log(req.body);
  res.status(200).end();
});

router.post("/testAuth", authenticateToken, (req, res) => {
  res.json({username: req.username});
})

module.exports = router;
