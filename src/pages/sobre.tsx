import { Container } from '../styles/about'

const About = () => {
  return (
    <Container>
      <h2>Sobre</h2>

      <p>
        <strong>PokéNext</strong> é um site com as funcionalidades da
        Pokédex, onde você consegue consultar os dados de todos os pokémons
        existentes até o momento (primeira geração até a oitava).
      </p>
      <p>
        Este site foi desenvolvido com{' '}
        <a href='https://nextjs.org/' target='_blank' rel='noreferrer'>
          NextJs
        </a>{' '}
        e consome as APIs:{' '}
        <a href='https://pokeapi.co/' target='_blank' rel='noreferrer'>
          PokéApi
        </a>{' '}
        (dados dos pokémons) e{' '}
        <a
          href='https://cdn.traction.one/pokedex/pokemon/1.png'
          target='_blank'
          rel='noreferrer'
        >
          {' '}
          CDN
        </a>{' '}
        (imagens dos pokémons).
      </p>

      <p>
        Desenvolvido por{' '}
        <a href='https://github.com/antuneslv' target='_blank' rel='noreferrer'>
          <strong>Leandro Vendemiatto Antunes</strong>
        </a>{' '}
        © 2022
      </p>
    </Container>
  )
}

export default About
