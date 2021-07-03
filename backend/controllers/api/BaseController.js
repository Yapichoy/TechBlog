class BaseController {
    constructor() {}
    
    connect (req, res) {
        const session = req.session;
        res.json(session);
    }
}

module.exports = new BaseController();