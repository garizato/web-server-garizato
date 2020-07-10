const http = require('http');

http.createServer((request, response) => {

        response.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Gerardo',
            edad: '38',
            url: request.url
        }

        response.write(JSON.stringify(salida));
        response.end();
    })
    .listen(3000);

console.log('Escuchando el puerto 8080');