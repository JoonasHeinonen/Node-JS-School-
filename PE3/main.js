const http = require('http');
const httpStatus = require('http-status-codes');
const fs = require('fs');

const port = 3000;

const getViewUrl = (url) => {
    return `views/${url}.html`
}

http.createServer((req, res) => {

    let viewUrl = getViewUrl(req.url);

    console.log(viewUrl);

    fs.readFile(viewUrl, (error, data) => {
        if (error) {
            res.writeHead(httpStatus.NOT_FOUND, 
                {'Content-Type' : 'text/html'}
            );
            res.write('<h1>Error! Page not found...</h1>')
        } else {
            res.writeHead(httpStatus.OK, 
                {'Content-Type' : 'text/html'}
            );
            res.write(data)
        }
        res.end();
    });
}).listen(port);

console.log(`Web-server is listening port ${port}`);