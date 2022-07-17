import { render, screen } from '@testing-library/react'
import Pokemon from '../pages/pokemon/[pokemonId]'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        isReady: jest.fn(),
        query: jest.fn(),
        push: jest.fn(),
      }
    }
  }
})

jest.mock('react-query', () => {
  return {
    useQuery() {
      return {
        data: {
          name: 'bulbasaur',
          types: [
            {
              slot: 1,
              type: { name: 'grass', url: 'www...' }
            }
          ],
          height: 7,
          weight: 69,
          id: '1'
        },
        error: {}
      }
    }
  }
})


describe('Pokemon', () => {
  it('should be rendered', () => {
    render(<Pokemon />)

    expect(screen.getByText('Número:')).toBeInTheDocument()
  })
})
