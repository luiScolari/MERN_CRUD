const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.get(
    "/tweets/api",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  ),
    app.post(
      "/tweets/api/new",
      createProxyMiddleware({
        target: "http://localhost:5000",
        changeOrigin: true,
      })
    ),
    app.patch(
      "/tweets/api/:id",
      createProxyMiddleware({
        target: "http://localhost:5000",
        changeOrigin: true,
      })
    );
};
