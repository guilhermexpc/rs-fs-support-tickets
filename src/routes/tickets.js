import { createTicketHandler } from "../handlers/tickets/create.js";
import { indexTicketHandler } from "../handlers/tickets/index.js";
import { updateTicketHandler } from "../handlers/tickets/update.js";
import { updateStatusTicketHandler } from "../handlers/tickets/updateStatus.js";
import { removeTicketHandler } from "../handlers/tickets/remove.js";

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
  },
  {
    method: "PUT",
    path: "/tickets/:id",
    handler: updateTicketHandler
  },
  {
    method: "PATCH",
    path: "/tickets/:id/close",
    handler: updateStatusTicketHandler
  },
  {
    method: "DELETE",
    path: "/tickets/:id",
    handler: removeTicketHandler
  }
];
