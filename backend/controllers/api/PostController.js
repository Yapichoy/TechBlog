const {Post} = require('../../models');
const {Meta} = require('../../models');
const {STATUS} = require('../../helpers/Constants')

class PostController {
    constructor() {}
    async getPosts (req, res) {
        const posts = await Post.findAll({
            where: {
                status: STATUS.ACTIVE
            },
        });
        const mappedPost = posts.map(p => {
            let post =  p.dataValues;
            post.descriptionPreview = this.cutDescription(post.description);
            return post;
        });
        res.json(mappedPost);
    }

    cutDescription(d) {
        return d.length > 0 && d.substr(0, 255) + '...';
    }

    async getPost (req, res) {
        const id = req.params.id;

        const post = await Post.findOne({
            where: {
                id: id
            },
            include: [Meta]
        });
        post.dataValues.metas = post.meta.map(m => m.dataValues);
        res.json(post.dataValues);
    }
}

module.exports = new PostController();