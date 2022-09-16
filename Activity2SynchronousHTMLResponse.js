const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    const fs = require('fs');
    let myData = fs.readFileSync('MOCK_DATA.json');
    let contacts = JSON.parse(myData);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>My Contacts</h1>");
    res.write("<table ><tr><th>id</th><th>First name</th><th>last name</th><th>email</th><th>Phone</th></tr>")
    for ( let i = 0 ; i<contacts.length ; i++){
        contact_current = contacts[i];
        id = contact_current.id;
        first_name = contact_current.first_name;
        last_name = contact_current.last_name;
        email = contact_current.email;
        phone = contact_current["phone number"];

        res.write(`<tr><td>${id}</td><td>${first_name}</td><td>${last_name}</td><td>${email}</td><td>${phone}</td></tr>`);
    }
    res.end("</table>");
    
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});