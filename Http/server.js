const http = require('http');
const fs = require('fs');


const port = '80';
const server = http.createServer();
server.on('error', (err) => {
    if (err) throw err;
});

server.on('listening', err => {
    if (err) throw err;
    console.log('服务启动');
})
server.on('request', (req, res) => {
    console.log('用户请求了');
    fs.readFile('../package.json', 'utf8', (err, data) => {
        if (err) {
            res.end(err.toString());
        } else {
            res.writeHead(200, {
                'Content-Length': Buffer.byteLength(data),
                'Content-Type': 'text/plain'
            });
            res.end(data);
        }
    })
})

server.listen(port);