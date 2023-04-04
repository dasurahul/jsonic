import type { NextApiRequest, NextApiResponse } from "next";

import posts from "../posts.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id;
  const [post] = posts.filter((post) => post.id.toString() === id);
  if (post) {
    res.status(200).json(post);
    return;
  }
  res.status(400).json({ message: "Bad Request" });
}
