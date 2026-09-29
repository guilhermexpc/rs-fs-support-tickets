import { randomUUID } from "node:crypto";

export const TicketStatus = {
  OPEN: "open",
  CLOSED: "closed"
};

export function createTicketHandler({ request, response, databate }) {
  // Handle the request/Response logic here
  const { equipment, description, user_name } = request.body;

  const ticket = {
    id: randomUUID(),
    equipment,
    description,
    user_name,
    status: TicketStatus.OPEN,
    created_at: new Date(),
    updated_at: new Date()
  };

  return response.end(JSON.stringify({ message: "Ticket created successfully", ticket }));
}
