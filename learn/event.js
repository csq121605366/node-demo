/*
// 引入event事件

let events = require('events');

// 创建eventEmitter对象

let eventEmitter = new events.EventEmitter();


// 创建事件处理程序

let connectHandler = function connected() {
    console.log('连接成功.');

    // 触发data_received事件
    eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);
eventEmitter.on('data_received', () => {
    console.log('数据接收成功.');
})

// 触发 connection 事件 
eventEmitter.emit('connection');

console.log("程序执行完毕。");

*/

let fs = require('fs');

fs.readFile('test.txt', (err, data) => {
    if (err) {
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
})

console.log('程序执行完毕');