import { render, screen, fireEvent } from '@testing-library/react'
import Header from '.'

const mockBackFunction = jest.fn()

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        route: '/pokemon/[pokemonId]',
        back: mockBackFunction
      }
    }
  }
})

describe('Header', () => {
  it('should be rendered', () => {
    render(<Header />)

    expect(screen.getByText('Poké')).toBeInTheDocument()
    expect(screen.getByText('Next')).toBeInTheDocument()
  })

  it('should click back button', () => {
    render(<Header />)

    const backButton = screen.getByText('Voltar')

    fireEvent.click(backButton)

    expect(mockBackFunction).toHaveBeenCalledTimes(1)
  })
})
