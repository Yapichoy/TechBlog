let { sitemapBuilder } = require('react-router-sitemap'); // import applyParams for paths pattern
let path = require('path'); // add path which will be needed for file write
let fs = require('fs'); // import file system object
const hostname = 'https://geekbreak.ru';
let routes = fs.readFileSync(path.resolve('./public', 'routes.txt'),  "utf8")

if (routes) {
    const dest = path.resolve('./public', 'sitemap.xml');
    routes = JSON.parse(routes);
    const sitemap = sitemapBuilder(hostname, routes);
    fs.writeFileSync(dest, sitemap.toString())
}
