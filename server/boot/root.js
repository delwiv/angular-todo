module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/toto', function (req, res){
  	res.end("404");
  });
  server.use(router);
};
