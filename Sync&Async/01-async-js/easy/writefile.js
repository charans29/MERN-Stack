var fs = require('fs');

var data = fs.readFileSync('content.txt');

fs.writeFile('output.txt', data, (err) => {
    if (err)
        console.log('Error writing to file');
    else
        console.log('\nSuccessfully wrote to file');
});

fs.readFile('output.txt','utf-8', (err, data)=>{    
    if (err) {
       return console.error(err);
    }
    console.log("\nAsynchronous read: \n" + data);
 });

 console.log('\nwaiting to read the written file..........................');