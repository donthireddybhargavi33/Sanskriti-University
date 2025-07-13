const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  const proxy = createProxyMiddleware({
    target: 'http://localhost:5000',
    changeOrigin: true,
    onError: (err, req, res) => {
      console.error('Proxy Error:', err);
      res.writeHead(500, {
        'Content-Type': 'application/json',
      });
      res.end(JSON.stringify({ error: 'Proxy Error', details: err.message }));
    },
    onProxyReq: (proxyReq, req, res) => {
      console.log(`Proxying ${req.method} request to: ${proxyReq.path}`);
    },
    onProxyRes: (proxyRes, req, res) => {
      console.log(`Received ${proxyRes.statusCode} from proxy for: ${req.url}`);
    },
    logger: console,
  });

  app.use('/api', proxy);
};
