import Link from 'next/link'
import { Container } from '../styles/404'

const NotFound = () => {
  return (
    <Container>
      <h2>404</h2>
      <h3>Página não encontrada.</h3>
      <p>A página que você está procurando não existe ou ocorreu um erro.</p>
      <p>
        Tente mais tarde ou{' '}
        <Link href='/'>
          <a>volte para a página principal</a>
        </Link>
        .
      </p>
    </Container>
  )
}

export default NotFound
