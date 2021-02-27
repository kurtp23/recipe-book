const express = require("express");
const authenticateToken = require("../auth/middleware/authenticateToken");
const router = express.Router();
const validateLogin = require("../auth/validateLogin");

router.post("/login", (req, res) => {
    const {username, password} = req.body;
    validateLogin({username, password})
    .then(token => {
      res.cookie("access_token", `Bearer ${token}`, {
        expires: new Date(Date.now() + 10000)
      });
      res.redirect("/");
    })
    .catch(err => {
        console.log(err);
        res.status(401).end();
    });
})

router.post("test", (req, res) => {
  console.log(JSON.stringify(req.cookie));
  res.status(200).end();
})

router.post("/api/addRecipe", (req, res) => {
  console.log(req.body);
  res.status(200).end();
});

router.post("/testAuth", authenticateToken, (req, res) => {
  res.json({username: req.username});
})

module.exports = router;
