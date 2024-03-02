const controller = require('../controllers/locMigration.controller')
module.exports = function(app){
    app.post(
        '/storeLocation',
        controller.ReadFile
    )
}