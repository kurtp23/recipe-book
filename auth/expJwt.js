const expressJwt = require('express-jwt');
const {privateKey, publicRoutes} = require('../config/auth.json');

module.exports = () => expressJwt({
    secret: privateKey,
    algorithms: ["HS256"]
}).unless({
    path: publicRoutes
});