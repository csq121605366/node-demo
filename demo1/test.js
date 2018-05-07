let assert = require("assert");
let CountStream = require("./countstream");
let countStream = new CountStream("baidu");
let fs = require("fs");
let passed = 0;
countStream.on("total", count => {
  assert.equal(count, 1);
  passed = count;
});

fs.createReadStream(__filename).pipe(countStream);

process.on("exit", _ => {
  console.log("module", module);
  console.log("cache", delete require.cache[require.resolve("./countstream")]);
  console.log("resolve", require.resolve("./countstream"));
  console.log("assertions passed:", passed);
});
