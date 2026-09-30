import { Database } from "../../database/database.js";

export function updateTicketHandler({ request, response, database }) {
  const { id } = request.params;
  const { equipment, description } = request.body;

  database.update(Database.Tables.TICKETS, id, {
    equipment,
    description,
    updated_at: new Date()
  });

  return response.writeHead(200).end();
}
