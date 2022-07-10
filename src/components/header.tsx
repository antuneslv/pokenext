import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Container, Logo, NavContainer } from '../styles/header'

const Header = () => {
  const router = useRouter()

  return (
    <Container>
      <Logo>
        <Image src='/images/pokedex.png' width='80' height='61' alt='pokedex' />
        <h1>
          Poké<span>Next</span>
        </h1>
      </Logo>
      <NavContainer>
        {router.route === '/pokemon/[pokemonId]' && (
          <button onClick={() => router.back()}>Voltar</button>
        )}
        {router.route !== '/' && (
          <Link href='/'>
            <a>Home</a>
          </Link>
        )}
        {router.route !== '/sobre' && (
          <Link href='/sobre'>
            <a>Sobre</a>
          </Link>
        )}
      </NavContainer>
    </Container>
  )
}

export default Header
