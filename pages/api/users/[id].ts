import type { NextApiRequest, NextApiResponse } from "next";

import users from "../users.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id;
  const [user] = users.filter((user) => user.id.toString() === id);
  if (user) {
    res.status(200).json(user);
    return;
  }
  res.status(400).json({ message: "Bad Request" });
}
