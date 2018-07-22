import * as Restify from "restify";
import { frontPageCopy } from "./copy";

function frontPageHandler(
    request: Restify.Request,
    response: Restify.Response,
    next: Restify.Next
) {
  response.send(200, frontPageCopy);
  next();
}

export { frontPageHandler };
