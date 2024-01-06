
fs = require('fs');

fs.readFile('rapid.txt', 'utf8', (err, data)=>{
    if (err) {
        return console.log('Error reading file');
    }
    
    cleanedData = data.replace(/\s+/g, ' ').trim();
    
    fs.writeFile('rapid.txt', cleanedData, 'utf8', function(err) {
        if (err) {
            return console.log('Error writing to file');
        }        
        console.log('File cleaned successfully');
    });
});

// CODE TO REMOVE EXTRA SPACES IN LINES, ALSO BETWEEN THEM

fs = require('fs');

fs.readFile('rapid.txt', 'utf8', (err, data)=> {
    if(err){
        return console.log('Error reading file:', err);
    }
    
    lines = data.split('\n');
    cleanedLines = lines.map(line => line.replace(/\s+/g, ' ').trim()).filter(Boolean);
    cleanedData = cleanedLines.join('\n');
    
    fs.writeFile('rapid.txt', cleanedData, 'utf8', err => {
        if(err){
            return console.log('Error writing to file:', err);
        }        
        console.log('File cleaned successfully');
    });
});



