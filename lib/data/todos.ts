import type { TodoType } from "../../types/todo"
import { readFile, writeFile } from "fs/promises"

export const getList = async () => {
  const todosBuffer = await readFile("data/todos.json")
  const todosString = todosBuffer.toString()

  return todosString ? (JSON.parse(todosString) as TodoType[]) : []
}

export const exist = async ({ id }: { id: number }) => {
  const todos = await getList()

  return todos.some((value) => value.id === id)
}

export const write = async (todos: TodoType[]) => {
  await writeFile("data/todos.json", JSON.stringify(todos))
}
