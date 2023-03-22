import users from "../users.json";

export async function GET(request: Request) {
  const id = request.url.split("/")[5];
  const [user] = users.filter((user) => user.id.toString() === id);
  return new Response(JSON.stringify(user, null, 2));
}
