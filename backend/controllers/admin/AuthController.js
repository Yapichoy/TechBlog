const {User} = require('../../models');
const Hash = require('../../helpers/Hash');
const SessionHelper = require('../../helpers/Session');
const CookieHelper = require('../../helpers/Cookie');

class AuthController {
    async login(req, res) {
        const arr = req.body;
        console.log('arr', arr);
        const isLoggedIn = await User.findOne({
            where: {
                email: arr.email,
                password: Hash.hashCode(arr.password)
            }
        });
        if(isLoggedIn) {
            const user = isLoggedIn.dataValues;
            const session = await SessionHelper.createSession(req, user);
            CookieHelper.setCookie(res, 'session', session);
        } else {
            console.log('Wrong email or password');
        }
        
        res.redirect('/admin');
    }
}

module.exports = new AuthController();