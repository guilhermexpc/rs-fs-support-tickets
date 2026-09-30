import { Database } from "../../database/database.js";

export function removeTicketHandler({ request, response, database }) {
  const { id } = request.params;

  database.delete(Database.Tables.TICKETS, id);
  return response.writeHead(200).end(`Ticket with ID ${id} has been removed successfully.`);
}
