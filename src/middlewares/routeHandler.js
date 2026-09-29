import { routes } from "../routes/index.js";
import { Database } from "../database/database.js";
import { extractQueryParams } from "../utils/extractQueryParams.js";

const database = new Database();

export async function routeHandler(request, response) {
  const route = routes.find((route) => {
    // Route is now a regular expression.
    // console.log(route);
    // return route.method === request.method && route.path === request.url;
    //
    return route.method === request.method && route.path.test(request.url);
  });

  if (route) {
    // retorna um array validade por uma expressão regular
    const routeParams = request.url.match(route.path);

    const query = routeParams.groups.query;

    console.log(routeParams);
    // console.log(extractQueryParams(query));

    request.query = query ? extractQueryParams(query) : {};
    return route.handler({ request, response, database });
  }

  return response.writeHead(404).end("Route not found");
}
