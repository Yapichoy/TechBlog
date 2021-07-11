const SessionHelper = require('../helpers/Session');
const CookieHelper = require('../helpers/Cookie');
const {User} = require('../models');

module.exports = {
    track: function(req, res, next) {
        var allowedOrigins =  ['http://localhost:3000', 'https://www.geekbreak.ru', 'https://geekbreak.ru'];
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requeted-With, Content-Type, Accept, Authorization, RBR');
        var origin = req.headers.origin;
        if(allowedOrigins.indexOf(origin) > -1){
            res.setHeader('Access-Control-Allow-Origin', origin);
        }
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    },

    auth: async function(req, res, next) {
        let session = CookieHelper.getCookie('session', req);
        if (!session) {
            res.redirect('/auth');
        }
        req.session = session;
        const adminId = session.adminId;
        const user =  await User.findOne({
            where: {
                id: adminId 
            }
        })
        req.user = user.dataValues;
        
        next();
    }
}