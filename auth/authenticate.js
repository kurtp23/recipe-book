const jwt = require("jsonwebtoken");
const {privateKey} = require("../config/auth.json");

const users = [{ id: 1, username: "username", password: "password"}];

const authenticate = async ({username, password}) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) throw new Error("Unmatched credentials");

    return {"token" : jwt.sign({foo: "bar"}, privateKey)}
}

module.exports = authenticate;