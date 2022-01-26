import styled from "styled-components"
import palette from "../styles/palette"

export default function Header() {
  return (
    <Container>
      <h1>cjcjon's TodoList</h1>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 0 12px;
  border-bottom: 1px solid ${palette.gray};

  h1 {
    font-size: 21px;
  }
`
