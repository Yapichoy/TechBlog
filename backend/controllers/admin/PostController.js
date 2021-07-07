const {Post} = require('../../models');
const _ = require('lodash');

class PostController {
    constructor() {}
    async index (req, res) {
        const posts = await Post.findAll();
        res.render('admin/post', {posts: posts.map(p => p.dataValues)})
    }

    async addPost(req, res) {
        const postArr = req.body;
        console.log('post arr', req.files);
        let filePath = ''
        if (req.files?.preview) {
            let preview = req.files.preview;
            filePath = '/uploads/' + preview.name;
            preview.mv(__dirname + '/../../public' + filePath);
        }
        await Post.create({...postArr, preview: filePath});
        
        res.redirect('/admin/post');
    }
}

module.exports = new PostController();