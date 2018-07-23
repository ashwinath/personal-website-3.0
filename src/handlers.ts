import * as Restify from "restify";
import { frontPageCopy, workflowCopy } from "./copy";

function frontPageHandler(
    request: Restify.Request,
    response: Restify.Response,
    next: Restify.Next
) {
  response.send(200, frontPageCopy);
  next();
}

function workflowHandler(
    request: Restify.Request,
    response: Restify.Response,
    next: Restify.Next
) {
  response.send(200, workflowCopy);
  next();
}

export { frontPageHandler, workflowHandler };
