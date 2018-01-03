var fs = require('fs');


/***fs.stat: get file info****/
fs.stat('samplefile.txt', function(err,stats){
   if(err){
       return console.log(err);
   } 
    console.log("****Using fs.stat to get file info:****");
    console.log(stats);
    console.log("isFile? = " + stats.isFile());
    console.log("isDirectory? = " + stats.isDirectory());
});


/***fs.writeFile: write to a file; fs.readFile: read from a file****/
fs.writeFile('newoutput.txt', 'new output text', function(err){
    if(err){
       return console.log(err);
   } 
    console.log("****fs.write worked, confirm the new data****");
    
    fs.readFile('newoutput.txt', function(err, data){
        if(err){
            return console.log(err);
        }
        console.log("Data is: " + data);
    });
});