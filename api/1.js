// fs模块
const fs = require('fs');

/**
 * fs.open(path,flags,[mode],callback) 异步打开文件
 * path：文件路径
 * flags：打开方式：读/写
 * r:读取模式
 * r+:读写模式
 * rs+: 以同步读写模式打开，操作系统绕过本地文件系统，这对于nfs挂载模式下打开文件很有用，应为他可以让你绕过潜在的旧本地缓存。
 * w:写模式，文件会被创建（如果文件不存在）或截断（如果文件存在）
 * mode：设置文件模式（读/写/执行） 421
 * callback:回调函数
 *          error:文件失败的错误，如果成功error为null
 *          fd: 文件标识
 */

// fs.open('1.txt', 'r', (err, fd) => {
//     console.log('open');
// })

let fd = fs.openSync('1.txt', 'r');
console.log(fd)

console.log('-----------------------------------');