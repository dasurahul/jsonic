import type { NextApiRequest, NextApiResponse } from "next";

import users from "../users.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.username) {
    const user = users.find(
      (user) => user.username.toLowerCase() === req.query.username.toLowerCase()
    );
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).json({ message: "Bad Request" });
    }
    return;
  }
  res.status(200).json(users);
}
