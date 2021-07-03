const {Quotes} = require('../../models'); 
class SearchController  {
    constructor() {}

    async getQuotes(req, res) {
        const quotesModel = await Quotes.findAll();
        const quotes = quotesModel.map( q => { 
            q.dataValues.list = JSON.parse(q.dataValues.list);
            return q.dataValues
        });
        res.json(quotes);
    }
}

module.exports = new SearchController();