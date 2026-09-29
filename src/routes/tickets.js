import { createTicketHandler } from "../handlers/tickets/create.js";

export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    handler: createTicketHandler
  }
];
