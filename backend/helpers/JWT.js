require('dotenv').config();
const jwt = require('jsonwebtoken');
module.exports = class JWTHelper {
    static settings = {
        algorithm: 'RS256'
    }
    static privatKey = process.env.SECRET_KEY;

    static encrypt(payload, settings) {
        return jwt.sign(payload, this.privatKey);
    }

    static decript(token) {
        return jwt.verify(token, this.privatKey);
    }
}