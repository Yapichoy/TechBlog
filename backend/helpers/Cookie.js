const JWTHelper = require('./JWT');
module.exports = class SessionHelper {
    static setCookie(res, name, payload) {
        const token = JWTHelper.encrypt(payload, {});
        res.cookie(name, token);
    }

    static getCookie(name, req) {
        if (name in req.cookies) {
            const token = req.cookies[name];
            return JWTHelper.decript(token);
        }
        return null;
    }
}