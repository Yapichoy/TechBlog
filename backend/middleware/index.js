const SessionHelper = require('../helpers/Session');
const CookieHelper = require('../helpers/Cookie');

module.exports = {
    track: async function(req, res, next) {
        let session = CookieHelper.getCookie('session', req);
        if (!session) {
            session = await SessionHelper.createSession(req);
            CookieHelper.setCookie(res, 'session', session);
        }
        req.session = session;
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requeted-With, Content-Type, Accept, Authorization, RBR');
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    }
}