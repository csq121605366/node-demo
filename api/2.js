const fs = require('fs');

/**
 * fs读取文件
 * fs.read(fd,buffer,offset,position,callback)
 * fd:成功打开文件返回的文件标识符
 * buffer: 数据被写入的buffer对象
 * offset: 数据写入buffer中的起始位置
 * length:是一个整数，指定要读取的字节数
 * position:是一个位置，指定从文件中开始读取的位置
 * callback(err,bytesRead,buffer)
 */

fs.open('1.txt', 'w+', (err, fd) => {
    if (err) {
        console.log('文件读取失败');
    } else {
        let bf = Buffer.alloc(3, '3456');
        // fs.read(fd, bf, 3, 6, 0, (error, len, buffer) => {
        //     console.log(error);
        //     console.log(len);
        //     console.log(buffer.toString('utf-8'));
        // })
        console.log(fd)
        fs.closeSync(fd)
        console.log(bf.toString('utf-8'), bf.length)
        fs.write(fd, bf.toString(), 0, 'utf-8', (err, written, string) => {
            console.log(err);
            console.log(written);
            console.log(string.toString('utf-8'));
        })
    }
})