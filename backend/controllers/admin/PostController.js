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

    async editIndex (req, res) {
        const id = req.params.id;
        const post = await Post.findOne({
            where: {id: id}
        });
        res.render('admin/post_edit', {post: post.dataValues});
    }

    async edit(req, res) {
        const arr = req.body;
        console.log("req data", arr);
        //let filePath = '',fileName ='', fullPath='';
        /*if (req.files?.file && ) {
            let file = req.files.file;
            fileName = file.md5 + '.'+ file.name.split('.')[1];
            filePath = '/uploads/' + fileName;
            fullPath = process.env.HOST+filePath;
            file.mv(__dirname + '/../../public' + filePath);
        }*/
        await Post.update(arr, {where: {
            id: arr.id
        }});
        
        res.redirect('/admin/post');
    }
}

module.exports = new PostController();