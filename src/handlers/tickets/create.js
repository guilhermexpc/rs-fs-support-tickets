import { randomUUID } from "node:crypto";
import { Database } from "../../database/database.js";

export function createTicketHandler({ request, response, database }) {
  // Handle the request/Response logic here

  try {
    const { equipment, description, user_name } = request.body;

    const ticket = {
      id: randomUUID(),
      equipment,
      description,
      user_name,
      status: Database.TicketStatus.OPEN,
      created_at: new Date(),
      updated_at: new Date()
    };

    database.insert(Database.Tables.TICKETS, ticket);
    return response.writeHead(201).end(JSON.stringify({ message: "Ticket created successfully", ticket }));
  } catch (error) {
    response.writeHead(400, { "Content-Type": "application/json" });
    response.end(
      JSON.stringify({
        error: "Invalid JSON"
      })
    );
  }
}
