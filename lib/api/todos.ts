export const getTodosAPI = () => fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`)

export const checkTodoAPI = (id: number) =>
  fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${id}`, { method: "PATCH" })
