const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><body><form  method="POST" action="/create-user"><label>Message : </label><input type="text" name="message"></input><button type="submit">Send</form></body></html>');
        return res.end();
    }
    if (req.url === '/create-user' && req.method === 'POST') {
        let reqBody = [];
        req.on('data', (chunk) => {
            reqBody.push(chunk);
        });
        req.on('end', () => {
            const msg = Buffer.concat(reqBody).toString();
            const message = msg.split('=')[1];
            console.log('Output :', message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    if (req.url === '/users') {
        res.write('<html><ul><li>User1</li><li>User2</li><li>User3</li></ul></html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><h1>Hello welcome to Vipuls World</h1></head></html>');
    res.end();
});

server.listen(3000);