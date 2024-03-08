import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -9rem;

  div{
    background: var(--shape);
    border-radius: 0.25rem;
    padding: 1rem 2rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      font-size: 2rem;
      font-weight: 500;
      margin-top: 1rem;
    }

    &:last-child{
      background: var(--green);
      color: var(--shape);
    }
  }
`