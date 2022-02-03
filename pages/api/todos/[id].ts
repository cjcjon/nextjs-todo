import type { NextApiRequest, NextApiResponse } from "next"
import { getList, exist, write } from "../../../lib/data/todos"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "PATCH": {
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
    case "DELETE": {
      try {
        const todoId = Number(req.query.id)
        const todo = exist({ id: todoId })
        if (!todo) {
          return res.status(404).end()
        }

        const todos = await getList()
        const filteredTodos = todos.filter((todo) => todo.id !== todoId)
        await write(filteredTodos)

        return res.status(200).end()
      } catch (e) {
        return res.status(500).send(e)
      }
    }
  }

  return res.status(405).end()
}
