import { createTicketHandler } from "../handlers/tickets/create.js";
import { indexTicketHandler } from "../handlers/tickets/index.js";

export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    handler: createTicketHandler
  },
  {
    method: "GET",
    path: "/tickets",
    handler: indexTicketHandler
  }
];
