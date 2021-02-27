const jwt = require("jsonwebtoken");
const {privateKey} = require("../../config/auth.json");

module.exports = (req, res, next) => {
    const auth = req.headers.authorization;
    const token = auth && auth.split(" ")[1];
    if (!token) return res.status(401).end();

    jwt.verify(token, privateKey, (err, user) => {
        if (err) return res.status(401).end();
        req.username = user.username;
        next();
    })
}