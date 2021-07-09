const {Upload} = require('../../models');
require('dotenv').config();

class UploadController {
    async index (req, res) {
        const uploads = await Upload.findAll();
        res.render('admin/uploads', {uploads: uploads.map(u => u.dataValues)})
    }
    async addIndex (req, res) {
        res.render('admin/upload_add')
    }
    async add(req, res) {
        const arr = req.body;
        let filePath = '',fileName ='', fullPath='';
        if (req.files?.file) {
            let file = req.files.file;
            fileName = file.md5 + '.'+ file.name.split('.')[1];
            filePath = '/uploads/' + fileName;
            fullPath = process.env.HOST+filePath;
            file.mv(__dirname + '/../../public' + filePath);
        }
        await Upload.create({...arr, path: filePath, name: fileName, full_path: fullPath});
        
        res.redirect('/admin/uploads');
    }
}

module.exports = new UploadController();