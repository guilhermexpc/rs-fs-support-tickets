import { Database } from "../../database/database.js";

/**
 * Padrão de nomenclatura para os handlers:
 * CREATE - Criar
 * INDEX - Listar
 * SHOW - Mostrar um único registro
 * UPDATE - Atualizar
 * REMOVE - Deletar
 */

export function indexTicketHandler({ request, response, database }) {
  const { status } = request.query;

  const filters = status ? { status } : null;
  // console.log(filters);
  const tickets = database.select(Database.Tables.TICKETS, filters);
  return response.end(JSON.stringify(tickets));
}
