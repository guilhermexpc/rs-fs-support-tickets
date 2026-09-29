export function parseRoutePath(path) {
  // tickets/:id?status=open
  const routeParametersRegex = /:([a-zA-Z0-9_]+)/g;

  const params = path.replace(routeParametersRegex, "(?<$1>[a-zA-Z0-9_-]+)");

  const pathRegex = new RegExp(`^${params}(?<query>\\?(.*))?$`);

  return pathRegex;
}
