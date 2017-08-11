const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');


const server = http.createServer();
const port = '80';

const htmlDir = __dirname + '/html/';
server.on('listening', err => {
  if (err) throw err;
  console.log('服务启动');
})
server.on('request', (req, res) => {
  let oUrl = url.parse(req.url);
  switch (oUrl.pathname) {
    case '/':
      // 首页
      sendData(htmlDir + 'index.html', req, res);
      break;
    case '/user':
      // 首页
      sendData(htmlDir + 'user.html', req, res);
      break;
    case '/login':
      // 登陆
      sendData(htmlDir + 'login.html', req, res);
      break;
    case '/login/validate':
      if (req.method.toUpperCase() === 'POST') {
        let str = '';
        req.on('data', chunck => {
          str += chunck;
        });
        req.on('end', () => {
          console.log(str);
        })
      }
      break;
    default:
      // 首页
      sendData(htmlDir + '404.html', req, res);
      break;
  }

});

function sendData(filePath, req, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      sendData(htmlDir + '404.html', req, res);
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html;charset = utf8',
        'Content-Length': Buffer.byteLength(data)
      });
      res.end(data);
    }
  })
}

server.listen(port);

