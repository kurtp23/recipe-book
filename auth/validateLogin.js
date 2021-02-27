const jwt = require("jsonwebtoken");
const {privateKey} = require("../config/auth.json");

const users = [{ id: 1, username: "User1", password: "password"}];

const validateLogin = async ({username, password}) => {
    console.log(`Parameters\nusername: ${username}\npassword: ${password}`)
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) throw "Unmatched credentials";
    return jwt.sign({username}, privateKey);
    
}

module.exports = validateLogin;