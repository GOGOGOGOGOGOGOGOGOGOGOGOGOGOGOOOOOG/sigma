# Proxy Without Backend

const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
    proxy.web(req, res, { target: 'http://google.com' }, (error) => {
        res.writeHead(502, { 'Content-Type': 'text/plain' });
        res.end('Bad Gateway');
    });
});

server.listen(3000, () => {
    console.log('Proxy server is running on http://localhost:3000');
});
