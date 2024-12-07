const http = require('http');

const server = http.createServer( (req,res) => {
    if( req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write("<h1>I am Jitendriya Meher, Home Page</h1><p>Hii</p>");
        res.end();
    }
    else if( req.url === '/about'){
        res.setHeader('Content-Type', 'text/plain');
        res.write("I am Jitendriya Meher, About Page");
        res.end();
    }
    else if( req.url === '/me'){
        res.write("I am Jitendriya Meher, MY Page");
        res.end();
    }
    else{
        res.write("I am Jitendriya Meher, Error Page");
        res.end();
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});