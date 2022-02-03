import type { NextApiRequest, NextApiResponse } from "next"
import { getList, write } from "../../../lib/data/todos"
import { TodoType } from "../../../types/todo"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET": {
      try {
        const todos = await getList()

        return res.status(200).send(todos ?? [])
      } catch (e) {
        return res.status(500).send(e)
      }
    }
    case "POST": {
      const { text, color } = req.body
      if (!text || !color) {
        res.status(400).send("text 혹은 color 가 없습니다.")
      }

      const todos = await getList()
      let todoId: number = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1

      const newTodo = { id: todoId, text, color, checked: false } as TodoType

      await write([...todos, newTodo])
      res.status(200).end()
    }
  }

  return res.status(405).end()
}
