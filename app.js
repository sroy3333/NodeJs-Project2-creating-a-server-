const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    //process.exit();
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>My Name Is Sukanya Roy</h1></body>");
    res.write("</html>");
    res.end();

});
server.listen(4000);
