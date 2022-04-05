const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/tweets/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })),
    app.post('/new', createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    }))
    ;
};