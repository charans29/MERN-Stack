
var fs = require("fs")

fs.readFile("content.txt", 'utf8',(err, text) => {
    if(err)
      console.log("err opening file")
    else{
      console.log("\nFile Contents: \n", text)
      start = Date.now(), count = i = 0;
      while(++i <= 1e9){
            count++;
       }
      end = Date.now();
      console.log('Inside\'s Expensive operation count:', count);
      console.log('& It\'s Time taken(ms):', end - start);
     }
    })


start = Date.now(), count = i = 0;
while(++i <= 3e9){
      count++;
    }
end = Date.now();
console.log('\nOutside\'s Expensive operation count:', count);
console.log('It\'s Time taken(ms): ', end - start);


// TUTORIALPOINT"S EXAMPLE


var fs = require("fs");

// Asynchronous read
fs.readFile('content.txt',function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('content.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");