import TodoList from "../components/TodoList"
import type { GetServerSideProps } from "next"
import type { TodoType } from "../types/todo"

interface Props {
  todos: TodoType[]
}

export default function Index({ todos }: Props) {
  return <TodoList todos={todos} />
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const todos: TodoType[] = []

  try {
    const res = await fetch("http://localhost:3000/api/todos")
    todos.push(...(await res.json()))
  } catch (e) {
    console.log(e)
  }

  return { props: { todos: todos } }
}
