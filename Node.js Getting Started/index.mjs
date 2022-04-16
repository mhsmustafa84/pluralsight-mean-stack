import http from 'http';

const server = http.createServer((req, res) => {
    console.log('server => req.headers', req.headers);
    res.end('Hello world');
});

server.listen(8080, () => {
    console.log('server is running');
});
