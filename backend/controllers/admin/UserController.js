const {User} = require('../../models');

class UserController {
    constructor() {}
    async index (req, res) {
        const users = await User.findAll();
        console.log(users);
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
            const user = await User.create(userArr);
        }
        
        res.redirect('/admin/users');
    }
}

module.exports = new UserController();