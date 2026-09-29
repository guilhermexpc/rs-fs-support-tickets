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
  console.log(status);
  const tickets = database.select("tickets");
  return response.end(JSON.stringify(tickets));
}
