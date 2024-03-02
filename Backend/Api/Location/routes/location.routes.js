const controller = require('../controllers/getLoc.controller');
module.exports = function(app){
    app.get(
        '/locations/:city?',
        controller.location
    )
}