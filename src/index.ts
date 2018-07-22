import * as Restify from "restify";
import * as Path from "path";
import { frontPageHandler } from "./handlers";

const server = Restify.createServer();

server.get('/api/frontpage', frontPageHandler);

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
