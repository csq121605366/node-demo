const fs = require('fs');

// fs.rename('4.txt', 'new.txt', (err, data) => {
//     if (err) throw err;
// })

// fs.stat('new.txt', () => {
//     console.log(arguments);
// })


fs.watch('4.txt', 'utf8', (eventType, filename) => {
    console.log(`事件类型是: ${eventType}`);
    if (filename) {
        console.log(`提供的文件名: ${filename}`);
    } else {
        console.log('未提供文件名');
    }
})