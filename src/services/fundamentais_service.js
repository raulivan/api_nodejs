module.exports.somar = (app, request, response) => {
    try {
        let resultado = 0;
        let num1 = 0;
        let num2 = 0;

        if(request.method == 'GET'){
            //Recuperando os parâmetros da URL
            num1 = parseInt(request.query.num1);
            num2 = parseInt(request.query.num2);
        }else if(request.method == 'POST'){
            //Recuperando os valores via body
            num1 = parseInt(request.body.num1);
            num2 = parseInt(request.body.num2);
        }

        resultado = num1 + num2;
        
        //Repondendo a requisição com código 200
        response.status(200).json({
                op: 'soma',
                message: 'Operação realizada com sucesso.',
                result: resultado
            });
    } catch (ex) {
        //Respondendo a requisição com código 400
        response.status(501).json({
                op: 'soma',
                message: 'Falha ao executar a operação. erro: ' + ex,
                result: null,
            });
    }
}
