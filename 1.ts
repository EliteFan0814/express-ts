import { RequestHandler } from "express-serve-static-core";
const test = (prefix: string): RequestHandler => {
  return (request, response, next) => {
    console.log(`${prefix}:${request.url}`);
    next();
  };
};
export default test;
