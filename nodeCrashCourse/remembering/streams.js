const fs = require('fs');

const readS = fs.createReadStream('./docs/blog3.txt', {encoding : 'utf-8'});
const writeS = fs.WriteStream('./docs/blog4.txt');

// readS.on('data', (chunk) => {
//     console.log("------New chunk------");
//     console.log(chunk);
//     writeS.write('\nNew chunk!\n');
//     writeS.write(chunk);
// })

readS.pipe(writeS);
