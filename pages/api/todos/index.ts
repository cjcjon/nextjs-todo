import type { NextApiRequest, NextApiResponse } from "next"
import { getList } from "../../../lib/data/todos"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).end()

  try {
    const todos = await getList()

    return res.status(200).send(todos ?? [])
  } catch (e) {
    return res.status(500).send(e)
  }
}
