const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('custoemHeader', 'customHeaderValue');
    res.write('Hello World\n');
    res.write('HAHA\n');
    res.end('END');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});