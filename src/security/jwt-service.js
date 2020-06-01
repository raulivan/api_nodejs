const jwt = require('jsonwebtoken');
const guid = require('uuid');

module.exports.auth = function (request, response) {
    if (request.body.user === 'raulivan' && request.body.password === '123456') {
        const id = guid.v4();
        console.log(id);
        var token = jwt.sign({
            id
        },
            process.env.SECRET,
            {
                expiresIn: 300 // expira em 5 minutos
            });

        response.status(200).json({
            auth: true,
            token: token
        });
    } else {
        response.status(401).json({
            message: 'Login inválido!'
        });
    }
}

module.exports.verificar_acesso = function (request, response, continuar) {
    try {
        var token = request.headers['x-access-token'];

        if (!token)
            return response.status(401).send({ auth: false, message: 'Acesso negado.' });

        jwt.verify(token, process.env.SECRET, function (err, decoded) {
            if (err)
                return response.status(403).json({
                    auth: false,
                    message: 'Token sem acesso ou inválido.'
                });
            request.userId = decoded.id;
            continuar();
        });
    } catch (ex) {
        response.status(400).json({
            message: 'Informe o Token. Detalhes: ' + ex 
        });
    }
}
