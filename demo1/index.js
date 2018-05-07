let CountStream = require("./countstream");
let countStream = new CountStream("csq");

let http = require("http");

http.get("http://www.baidu.com", res => {
  res.pipe(countStream);
});

countStream.on("total", count => {
  console.log("total matches:", count);
});
