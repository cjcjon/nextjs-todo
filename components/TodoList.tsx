import { useMemo } from "react"
import styled from "styled-components"
import palette from "../styles/palette"
import type { TodoType } from "../types/todo"

interface Props {
  todos: TodoType[]
}

export default function TodoList({ todos }: Props) {
  const colorCountMap = useMemo(() => {
    return todos
      .map((todo) => todo.color)
      .reduce((map, color) => {
        map.set(color, (map.get(color) ?? 0) + 1)
        return map
      }, new Map<string, number>())
  }, [todos])

  return (
    <Container>
      <div className="todo-list-header">
        <p className="todo-list-last-todo">
          남은 TODO<span>{todos.length}개</span>
        </p>
        <div className="todo-list-header-colors">
          {Array.from(colorCountMap).map(([color, count]) => (
            <div className="todo-list-header-color-num" key={color}>
              <div className={`todo-list-header-round-color bg-${color}`} />
              <p>{count}개</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;

  .todo-num {
    margin-left: 12px;
  }

  .todo-list-header {
    padding: 12px;
    position: relative;
    border-bottom: 1px solid ${palette.gray};

    .todo-list-last-todo {
      font-size: 14px;
      margin: 0 0 8px;

      span {
        margin-left: 12px;
      }
    }

    .todo-list-header-colors {
      display: flex;

      .todo-list-header-color-num {
        display: flex;
        margin-right: 8px;

        p {
          font-size: 14px;
          line-height: 16px;
          margin: 0 0 0 6px;
        }

        .todo-list-header-round-color {
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }
      }
    }
  }

  .bg-blue {
    background-color: ${palette.blue};
  }

  .bg-green {
    background-color: ${palette.green};
  }

  .bg-navy {
    background-color: ${palette.navy};
  }

  .bg-orange {
    background-color: ${palette.orange};
  }

  .bg-red {
    background-color: ${palette.red};
  }

  .bg-yellow {
    background-color: ${palette.yellow};
  }
`
