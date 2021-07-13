const {Post, Meta, Sequelize } = require('../../models');
const {STATUS} = require('../../helpers/Constants')
const Op = Sequelize.Op;

class PostController {
    constructor() {}
    async getPosts (req, res) {
        let meta = {};
        let settings = {
            where: {},
            order: [['createdAt','DESC']]
        }
        if (req.query.meta) {
            meta = Meta
            if (!('inclide' in settings)) {
                settings.include = [];
            }
            settings.include.push(meta);
            settings.where['$meta.slug$'] = req.query.meta
        }
        if (req.query.search) {
            settings.where = {
                [Op.or]: [
                    {
                        title: {
                        [Op.like]: `%${req.query.search}%`
                        }
                    },
                    {
                        description: {
                            [Op.like]: `%${req.query.search}%`
                        }
                    }
                ]
            }
        }
        settings.where.status = STATUS.ACTIVE
        const posts = await Post.findAll(settings);
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