export async function jsonHandler(request, response, next) {
  // Handle the request/Response logic here

  const buffer = [];

  for await (const chunk of request) {
    buffer.push(chunk);
  }

  try {
    request.body = JSON.parse(Buffer.concat(buffer).toString());
  } catch (error) {
    request.body = null;
    console.log("Error: ", error);
  }

  response.setHeader("Content-Type", "application/json");
  // next();
}
