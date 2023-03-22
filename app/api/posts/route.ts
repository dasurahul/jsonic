import posts from "./posts.json";

export async function GET(request: Request) {
  return new Response(JSON.stringify(posts, null, 2));
}
