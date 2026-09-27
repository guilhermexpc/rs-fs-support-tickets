import { routes } from "../routes/index.js";

export async function routeHandler(request, response) {
  const route = routes.find((route) => route.method === request.method && route.path === request.url);

  if (route) {
    return route.handler(request, response);
  }

  return response.writeHead(404).end("Route not found");
}
