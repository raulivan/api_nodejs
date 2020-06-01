const auth = require('../security/jwt-service');

module.exports = function (app) {

    app.post('/users/auth', function (request, response) {
        try {
            auth.auth(request,response);
        } catch (ex) {
            response.status(500).send(ex);
        }

    });
}

