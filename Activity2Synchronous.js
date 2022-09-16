const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    const fs = require('fs');
    let myData = fs.readFileSync('MOCK_DATA.json');
    let contacts = JSON.parse(myData);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(JSON.stringify(contacts))
    res.end('End Here')
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});