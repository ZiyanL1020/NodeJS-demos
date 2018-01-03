var fs = require('fs');
var zlib = require('zlib');

/***Read from a stream****/
var data = '';
var reader = fs.createReadStream('input.txt');

//The 'data' event is emitted whenever the stream is relinquishing ownership of a chunk of data to a consumer
reader.on('data', function(chunk){
   data += chunk; 
});

//The 'end' event is emitted when there is no more data to be consumed from the stream.
reader.on('end', function(){
    console.log(data);
});
reader.on('error', function(err){
    console.log(err.stack);
});



/***Write to a stream****/
var str = "Sample output text";
var writer = fs.createWriteStream('output.txt');

writer.write(str, 'UTF8');

//The 'finish' and 'end' events are from the stream.Writable and stream.Readable classes, respectively. The 'finish' event is emitted after stream.end() is called and all chunks have been //processed by stream._transform(). The 'end' event is emitted after all data has been output, which occurs after the callback in transform._flush() has been called.
writer.on('finish', function(){
    console.log("Write to output.txt completed");
});

writer.on('error', function(err){
    console.log(err.stack);
});



/***Pipe the streams****/
//read from input.txt and write to output.txt
reader.pipe(writer); 

/***Chain the streams****/
//compress input.txt
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

