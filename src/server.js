import http from "node:http";

import { jsonHandler } from "./middlewares/jsonHandler.js";

// Create an HTTP server - Simplified version
async function listener(request, response) {
  // Handle the request/Response logic here
  await jsonHandler(request, response);

  console.log(request.body);
}

http.createServer(listener).listen(3333);

// Create an HTTP server  - standard version
/*
const server = hhttp.createServer((req, res) => {
  // Handle incoming requests here
})

server.liste(3333);
*/
