const auth = require('../security/jwt-service');

module.exports = function (app) {

    app.get('/delta', function (request, response) {
        try {
            auth.verificar_acesso(request,response,function(){
                app.src.services.equacao_service.delta(app,request,response);
            });
        } catch (ex) {
            response.status(500).send(ex);
        }

    });
}

