const fs = require('fs');
const http = require('http');
const url = require('url');
const path = require('path');

http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    if(pathname === '/'){
        fs.readFile('main.html', 'utf8', (err, data)=>{
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write(data)
        })
    }else if(pathname === '/search'){
        const searchPath = path.join(__dirname, query.path)

        fs.readFile(searchPath, 'utf8', function(err, data){
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write(data)
            console.log(searchPath)
            console.log(parsedUrl)
            console.log(query)
            console.log(pathname)

        })
    }else if(query.path === 'main.html'){
        let pathing = 'index.html'

        fs.readFile('C:/Users/clark/Downloads/node/' + pathing , 'utf8', function(err, data){
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write(data)
            console.log(searchPath)
            console.log(parsedUrl)
            console.log(query)
            console.log(pathname)

        })
    }else if(query.path === 'index.html'){
        let pathing = 'main.html'

        fs.readFile('C:/Users/clark/Downloads/node/' + pathing, 'utf8', function(err, data){
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write(data)
            console.log(searchPath)
            console.log(parsedUrl)
            console.log(query)
            console.log(pathname)

        })
    }

    console.log(`Request received for: ${pathname}`);
}).listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});