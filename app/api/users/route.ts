import users from "./users.json";

export async function GET(request: Request) {
  return new Response(JSON.stringify(users, null, 2));
}
