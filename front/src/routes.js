const {getRoutesApi} = require('./api/routes');

(async function a() {   
    module.exports = await getRoutesApi();
})();
