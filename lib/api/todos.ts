import { TodoType } from "../../types/todo"

interface AddTodoAPIBody {
  text: string
  color: TodoType["color"]
}

export const getTodosAPI = () => fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`)

export const checkTodoAPI = (id: number) =>
  fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${id}`, { method: "PATCH" })

export const addTodoAPI = (body: AddTodoAPIBody) =>
  fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
