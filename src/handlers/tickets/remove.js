import { Database } from "../../database/database.js";

export function removeTicketHandler({ request, response, database }) {
  const { id } = request.params;

  const ticket = database.select(Database.Tables.TICKETS, { id });

  if (ticket.length === 0) {
    return response.writeHead(404).end(`Ticket ${id} was not found.`);
  }

  database.delete(Database.Tables.TICKETS, id);
  return response.writeHead(200).end(`Ticket ${id} has been removed successfully.`);
}
