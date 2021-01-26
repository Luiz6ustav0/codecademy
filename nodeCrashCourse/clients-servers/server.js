const http = require('http');
const fs = require('fs');
const _ = require('lodash');


const server = http.createServer((req, response) => {

    // lodash
    const greet = _.once((num) => {
        console.log(num);
    })

    greet(1);
    greet(2);

    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            response.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            response.statusCode = 200;
            break;
        case '/about-me':
            response.statusCode = 301;
            response.setHeader('Location', '/about');
            // response.end();
            break;
        default:
            path += '404.html';
            response.statusCode = 404;
            break;
    }

    // set header content type
    response.setHeader('Content-Type', 'text/html');
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            response.end();
        } else {
            response.end(data);
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log("Server running on port 3000");
});
