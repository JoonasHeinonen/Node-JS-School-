const http = require("http");
const httpStatus = require("http-status-codes");

const port = 3000;

const app = http.createServer((request, response) => {
    response.writeHead(httpStatus.OK, {
        "Content-Type" : "text/html"
    });

    let responseMessage = "<h1>Terve Uljas Maailma!</h1>";

    response.write(responseMessage);

    response.end();
});

app.listen(port);