import { Database } from "../../database/database.js";

export function updateStatusTicketHandler({ request, response, database }) {
  const { id } = request.params;
  const { solution } = request.body;

  console.log(solution);

  database.update(Database.Tables.TICKETS, id, { status: Database.TicketStatus.CLOSED, solution });

  return response.writeHead(200).end();
}
