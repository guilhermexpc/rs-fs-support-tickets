export async function jsonHandler(request, response) {
  // Handle the request/Response logic here

  request.body = null;
  request.query = {};

  const buffer = [];

  for await (const chunk of request) {
    buffer.push(chunk);
  }

  try {
    const body = Buffer.concat(buffer).toString();
    request.body = body ? JSON.parse(body) : null;
  } catch (error) {
    request.body = null;
    console.log("Error: ", error);
  }

  response.setHeader("Content-Type", "application/json");
  // next();
}
