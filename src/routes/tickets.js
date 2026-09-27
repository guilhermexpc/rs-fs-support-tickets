export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    handler: async (request, response) => {
      // Handle the request/Response logic here
      response.end("Ticket created successfully");
    }
  }
];
