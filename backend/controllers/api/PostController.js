const {Post} = require('../../models');
const {STATUS} = require('../../helpers/Constants')

class PostController {
    constructor() {}
    async getPosts (req, res) {
        const posts = await Post.findAll({
            where: {
                status: STATUS.ACTIVE
            },
        });
        res.json(posts.map(p => p.dataValues))
    }
}

module.exports = new PostController();