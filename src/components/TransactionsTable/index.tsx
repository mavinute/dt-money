import { Container } from './styles'

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvedor Freelance</td>
            <td className='deposit'>R$ 1000,00</td>
            <td>Trabalho</td>
            <td>01/03/2024</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>R$ 500,00</td>
            <td>Moradia</td>
            <td>02/03/2024</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}