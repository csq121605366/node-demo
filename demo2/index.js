const fs = require("fs");
const path = require("path");

// const rs = fs.createReadStream("./work.zip");
// var chunkArr = [],
//   chunkLen = 0;
// rs.on("readable", () => {
//   var chunk = null; //这里需要判断是否到了流的末尾
// //   console.log(rs.read())
//   if ((chunk = rs.read()) !== null) {
//     chunkArr.push(chunk);
//     chunkLen += chunk.length;
//   }
// });
// rs.on("end", chunk => {
//   console.log(Buffer.concat(chunkArr, chunkLen).toString());
// });

// const rs = fs.createReadStream("./test.json");
// console.log(rs._readableState.flowing);
// rs.on("data", chunk => {
//   console.log(`接收到${chunk.length}字节数据...`);
//   console.log(rs._readableState.flowing);
//   rs.pause();
//   console.log(rs._readableState.flowing);
//   console.log(`数据接收将暂停1.5秒.`);
//   setTimeout(() => {
//     console.log(rs._readableState.flowing);
//     rs.resume();
//     console.log(rs._readableState.flowing);
//   }, 1000);
// });
// rs.on("end", chunk => {
//   console.log(rs._readableState.flowing);
//   console.log(`数据接收完毕`);
// });

// const rs = fs.createReadStream("./test.json");
// console.log(rs._readableState.flowing);
// rs.pipe(process.stdout);
// console.log(rs._readableState.flowing);

// const ws = fs.createWriteStream("./test.json");
// ws.write(new Buffer.allocUnsafe(10).fill("a"), "utf8", () => {
//   process.stdout.write("this chunk is flushed.");
// });
// ws.end("done.");

function copy(src, dest) {
  src = path.resolve(src);
  dest = path.resolve(dest);
  const rs = fs.createReadStream(src, {
    highWaterMark: 64 * 1024
  });
  const ws = fs.createWriteStream(dest);
  console.log("正在复制中...");
  const stime = +new Date();
  rs.on("data", chunk => {
    if (null === ws.write(chunk)) {
      rs.pause();
    }
  });
  ws.on("drain", () => {
    rs.resume();
  });
  rs.on("end", () => {
    const etime = +new Date();
    console.log(`已完成，用时：${(etime - stime) / 1000}秒`);
    ws.end();
  });
  function calcProgress() {}
}
copy("./big.zip", "./javascript.zip");
