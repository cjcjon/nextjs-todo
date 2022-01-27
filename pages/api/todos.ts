import * as fs from "fs/promises"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return

  try {
    const fileData = await fs.readFile("data/todos.json")
    const todos = fileData.toString()

    return res.status(200).send(todos ? JSON.parse(todos.toString()) : [])
  } catch (e) {
    console.log(e)

    res.status(500).send(e)
  }
}
