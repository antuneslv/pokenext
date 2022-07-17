import { render, screen } from '@testing-library/react'
import MainContainer from '.'
import Header from '../header'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        route: '/pokemon/[pokemonId]',
        back: jest.fn()
      }
    }
  }
})


describe('MainContainer', () => {
  it('should be rendered', () => {
    render(
      <MainContainer>
        <Header />
        <h1>Teste</h1>
      </MainContainer>
    )

    expect(screen.getByText('Teste')).toBeInTheDocument()
  })
})
