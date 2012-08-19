// cargar modulo http
var http= require('http');

//crear servidor server
http.createServer(function(req,res){
	
	//contenido header
	res.writeHead(200,{'content-type':'text-plain'});

	//escribir mensaje e indicar que la comunicacion esta completa
	res.end("Hola mundo\n");
	

}).listen(8124);


console.log('Servidor ejecutandose en 8124\n');