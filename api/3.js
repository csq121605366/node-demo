const fs = require('fs');

let fileName = '2.txt';

fs.writeFile(fileName, 'hello node', () => {
    fs.writeFileSync(fileName, 'not hello node', 'ascii');
})