import posts from "../posts.json";

export async function GET(request: Request) {
  const id = request.url.split("/")[5];
  const [post] = posts.filter((post) => post.id.toString() === id);
  return new Response(JSON.stringify(post, null, 2));
}
