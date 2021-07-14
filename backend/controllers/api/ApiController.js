const {Post, Meta} = require('../../models');
const {STATUS} = require('../../helpers/Constants')
let path = require('path'); // add path which will be needed for file write
let fs = require('fs'); // import file system object

class ApiController {
    async routes (req, res) {
        let routes = ['/'];
        const posts = await Post.findAll({
            where: {
                status: STATUS.ACTIVE
            }
        })
        if (posts?.length > 0) {
            posts.forEach(p => {
                routes.push(`/post/${p.dataValues.id}`)
            });
        }
        const metas = await Meta.findAll({
            where: {
                status: STATUS.ACTIVE
            }
        })
        if (metas?.length > 0) {
            metas.forEach(m => {
                routes.push(`/${m.dataValues.slug}`)
            });
        }
        const dest = __dirname + '/../../../front/public/routes.txt'; 
        fs.writeFileSync(dest, JSON.stringify(routes))
        res.json(routes);
    }
}

module.exports = new ApiController();