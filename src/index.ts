import * as Restify from "restify";
import * as Path from "path";

const server = Restify.createServer();

function helloWorldHandler(
    req: Restify.Request,
    res: Restify.Response,
    next: Restify.Next
) {
  res.send("hello world");
  next();
}

server.get('/-/hello', helloWorldHandler);

/**
 * This has to be the last.
 * Serves the react files.
 */
server.get('/*', Restify.plugins.serveStatic({
  directory: Path.join(__dirname, "public"),
  default: 'index.html',
}));

server.listen(8080, () => {
  console.log("listening on port 8080");
});
