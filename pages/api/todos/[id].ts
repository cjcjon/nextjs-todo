import type { NextApiRequest, NextApiResponse } from "next"
import { getList, exist, write } from "../../../lib/data/todos"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "PATCH") return res.status(405).end()

  try {
    const todoId = Number(req.query.id)
    const isExist = await exist({ id: todoId })

    if (!isExist) {
      return res.status(404).end()
    }

    const todos = await getList()
    const changedTodos = todos.map((todo) => {
      return { ...todo, checked: todo.id === todoId ? !todo.checked : todo.checked }
    })

    await write(changedTodos)

    return res.status(200).end()
  } catch (e) {
    return res.status(500).send(e)
  }
}
