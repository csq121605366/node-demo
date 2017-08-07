let fs = require('fs')

let http = require('http')
let querystring = require('querystring')

// 侦听服务器的request事件
http.createServer((req, res) => {
    let postData;
    req.setEncoding('utf-8');
    // 侦听请求的data事件
    req.on('data', chuck => {
        postData += chuck
    });
    // 侦听请求的end事件
    req.on('end', () => {
        res.on(postData)
    });
}).listen(8080);
console.log('服务器启动成功')