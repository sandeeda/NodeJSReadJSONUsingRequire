const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    fs.readFile('MOCK_DATA.json', function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        res.end(data.toString())
    });
    //res.end('End Here');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
