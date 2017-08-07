const fs = require('fs');


fs.mkdir('1', err => {
    if (err && err.code === 'EEXIST') {
        console.log('文件夹存在');
        return false;
    }
    console.log('文件夹创建成功');
})

// fs.readdir('../api', (err, filelist) => {
//     if (err) throw err;
//     filelist.forEach((f, i, a) => {
//         console.log(fs.statSync(f).size);
//     })
// })