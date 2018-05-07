// let Writeable = require("stream").Writeable;
let stream = require("stream");

class CountStream extends stream {
  constructor(matchText, options) {
    super();
    this.count = 0;
    this.matcher = new RegExp(matchText, "ig");
  }
  write(chunk, ecoding, cb) {
    let matches = chunk.toString().match(this.matcher);
    if (matches) {
      this.count += matches.length;
    }
    if (cb) cb();
  }

  end() {
    this.emit("total", this.count);
  }
}

module.exports = CountStream;
