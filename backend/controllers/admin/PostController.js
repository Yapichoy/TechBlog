const {Post} = require('../../models');
const {Upload} = require('../../models');
const _ = require('lodash');

class PostController {
    constructor() {}
    async index (req, res) {
        const posts = await Post.findAll();
        res.render('admin/post', {posts: posts.map(p => p.dataValues)})
    }

    async addPost(req, res) {
        const postArr = req.body;
        let filePath = '', fileName ='', fullPath='';
        if (req.files?.preview) {
            let preview = req.files.preview;
            fileName = preview.md5 + '.'+ preview.name.split('.')[1];
            filePath = '/uploads/' + fileName;
            fullPath = process.env.HOST+filePath;
            preview.mv(__dirname + '/../../public' + filePath);
            await Upload.create({path: filePath, name: fileName, full_path: fullPath});
        }
        await Post.create({...postArr, preview: filePath});
        
        res.redirect('/admin/post');
    }
}

module.exports = new PostController();