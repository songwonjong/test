var http = require('http');
http.createServer(function(request,response){
	response.writeHead(200);
	response.write("송원종");
	response.end();
}).listen(8000);
console.log('http://localhost:3000/');
