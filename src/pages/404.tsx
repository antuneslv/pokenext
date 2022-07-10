import Link from 'next/link'
import { Main } from '../styles/404'

const NotFound = () => {
  return (
    <Main>
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
    </Main>
  )
}

export default NotFound
