//const SessionHelper = require('../helpers/Session');
//const CookieHelper = require('../helpers/Cookie');

module.exports = {
    track: function(req, res, next) {
        // let session = CookieHelper.getCookie('session', req);
        // if (!session) {
        //     session = await SessionHelper.createSession(req);
        //     CookieHelper.setCookie(res, 'session', session);
        // }
       // req.session = session;
        var allowedOrigins =  ['http://localhost:3000', 'https://www.geekbreak.ru', 'https://geekbreak.ru'];
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requeted-With, Content-Type, Accept, Authorization, RBR');
        var origin = req.headers.origin;
        if(allowedOrigins.indexOf(origin) > -1){
            res.setHeader('Access-Control-Allow-Origin', origin);
        }
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    }
}