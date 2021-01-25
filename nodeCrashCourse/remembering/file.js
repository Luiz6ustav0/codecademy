const fs = require('fs');


// reading
fs.readFile('./docs/t1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

console.log('Line');


// writing
fs.writeFile('./docs/deleteMe.txt', 'Replacing content', () => {
    console.log("File was written.");
})


// dir
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        } 
        console.log('folder created');
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Folder deleted');
    });
}


// deleting
if (fs.existsSync('./docs/deleteMe.txt')) {
    fs.unlink('./docs/deleteMe.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("File deleted")
    })
}
