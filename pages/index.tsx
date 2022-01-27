import type { GetServerSideProps } from "next"
import type { TodoType } from "../types/todo"
import TodoList from "../components/TodoList"
import { getTodosAPI } from "../lib/api/todos"

interface Props {
  todos: TodoType[]
}

export default function Index({ todos }: Props) {
  return <TodoList todos={todos} />
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const todos: TodoType[] = []

  try {
    const res = await getTodosAPI()

    todos.push(...(await res.json()))
  } catch (e) {
    console.log(e)
  }

  return { props: { todos: todos } }
}
