//Adicionando a referência do Express-Validator
const { check, validationResult } = require('express-validator');

let regras_validacao = [
	check('num1','Número 1 não informado').not().isEmpty().isInt(),
	check('num2','Número 2 não informado').not().isEmpty().isInt()
];
module.exports = function(app){
	//somar via GET
	app.get('/somar',regras_validacao, function(request, response){	
		//Executando a validação
        let erros = validationResult(request);
        if(!erros.isEmpty()){
            return response.status(422).jsonp(erros.array());
		}	
		app.src.services.fundamentais_service.somar(app,request,response);
    });
	//Somar via POST
	app.post('/somar',regras_validacao, function(request, response){
		//Executando a validação
        let erros = validationResult(request);
        if(!erros.isEmpty()){
            return response.status(422).jsonp(erros.array());
		}
		app.src.services.fundamentais_service.somar(app,request,response);
	});
}
