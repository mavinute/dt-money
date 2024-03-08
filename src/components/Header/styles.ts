import styled from "styled-components"

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 2rem 9rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: 0;
    border-radius: 0.25rem;
    background: var(--blue-light);
    color: var(--shape);
    font-size: 1rem;
    padding: 0 3rem;
    height: 2rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`