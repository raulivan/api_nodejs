//Adicionando o módulo de configuração do servidor
const app = require('./config/server.js');


//Iniciando e definindo em qual porta vai ficar o servidor
app.listen(3000, function(){
	console.log("Calculador API - online");

});