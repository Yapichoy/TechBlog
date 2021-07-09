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

    async getPost (req, res) {
        const id = req.params.id;

        const post = await Post.findOne({
            where: {
                id: id
            },
        });
        res.json(post.dataValues);
    }
}

module.exports = new PostController();