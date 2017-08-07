const fs = require('fs');let fname = '4.txt';

let fexist = fs.existsSync(fname);

// 此处之前的api为fs.exists来检测文件是否存在
// 现在变为了fs.open来检测文件是否存在  然后再进行其他操作
// 其中操作模式定义为 wx+ 表示 可读可写，当path存在时返回错误
// wx 可写 当path存在时返回错误

fs.open(fname, 'wx+', (err, fd) => {
    if (err && err.code === 'EEXIST') {
        console.log('文件存在');
        fs.appendFile(fname, '-我是增加的内容', (err) => {
            if (err) throw err;
            console.log('文件增加成功');
        })
    } else {
        console.log('文件不存在');
        fs.writeFile(fname, '初始化内容', { encoding: 'utf8', flag: 'w' }, err => {
            if (err) throw err;
            console.log('文件初始化成功');
        })
    }
})