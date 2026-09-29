import { tickets } from "./tickets.js";
import { parseRoutePath } from "../utils/parseRoutePath.js";

export const routes = [...tickets].map((route) => {
  return {
    ...route,
    path: parseRoutePath(route.path)
  };
});
