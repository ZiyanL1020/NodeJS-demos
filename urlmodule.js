var http = require('http');
var url = require('url');

http.createServer(function(req,res){
    res.writeHead(200, {
        'content-type': 'text/html'
    });
    
    var q = url.parse(req.url, true);
    res.write("Parsing the url itself:<br/>");
    res.write("Search = " + q.search + "<br/>");
    
    
    var qdata = q.query;
    res.write("Parsing the query data:</br>");
    for(let key in qdata){
        res.write(key + " = " + qdata[key] + "</br>");
    }
    res.end();
}).listen(8080);