import styled from "styled-components"

export const Container = styled.div`
  padding: 2rem 0;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-title);
      font-weight: 500;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
        font-weight: 500;
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }

    
  }
`