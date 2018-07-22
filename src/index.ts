import * as Restify from "restify";
import * as Path from "path";
import logger from "./logger";
import { frontPageHandler } from "./handlers";

const server = Restify.createServer({
  log: logger,
});

server.on('after', Restify.plugins.auditLogger({
  log: logger,
  event: "after",
}));
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
  const env = process.env.ENV || "DEV";
  logger.info(`Website running on port 8080, mode = ${env}.`)
});
