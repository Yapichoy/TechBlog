const {User} = require('../../models');
const Hash = require('../../helpers/Hash');

class UserController {
    constructor() {}
    async index (req, res) {
        const users = await User.findAll();
        res.render('admin/users', {users: users.map(u => u.dataValues)})
    }

    async addPost(req, res) {
        const userArr = req.body;
        const alreadyExist = await User.findOne({
            where: {
                email: userArr.email
            }
        });
        if(!alreadyExist) {
            userArr.password = Hash.hashCode(userArr.password);
            const user = await User.create(userArr);
        }
        
        res.redirect('/admin/users');
    }
}

module.exports = new UserController();