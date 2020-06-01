module.exports.delta = (app, request, response) => {
    try {
        let resultado = 0;
        let var_a = 0;
        let var_b = 0;
        let var_c = 0;

        var_a = parseInt(request.query.a);
        var_b = parseInt(request.query.b);
        var_c = parseInt(request.query.c);

        resultado = Math.pow(var_b,2) - 4 * var_a * var_c;

        response.status(200).json({
                op: 'delta',
                message: 'Operação realizada com sucesso.',
                result: resultado
            });
    } catch (ex) {
        response.status(500).send({
                op: 'delta',
                message: 'Falha ao executar a operação. erro: ' + ex,
                result: null,
            });
    }
}
