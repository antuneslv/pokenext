import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { useQuery } from 'react-query'
import api from '../../services/api'
import { genAmountPokemons } from '../utils/gen-amount-pokemons'
import {
  Container,
  InputContainer,
  CardContainer,
  Card
} from '../styles/pokemons'

interface PokemonCard {
  name: string
  url: string
  id: number
}

const Generations = () => {
  const router = useRouter()

  const [currentGen, setCurrentGen] = useState('')
  const [previousGenPokemons, setPreviousGenPokemons] = useState(0)
  const [diffGenPokemons, setDiffGenPokemons] = useState(0)
  const [genNumber, setGenNumber] = useState('')

  useEffect(() => {
    if (router.isReady) {
      const gen = router.query.genNumber as string
      setCurrentGen(gen.split('-')[1])
    }
  }, [router.isReady, router.query.genNumber])

  useEffect(() => {
    if(currentGen) {
      setPreviousGenPokemons(genAmountPokemons[currentGen].prevGenTotalPoke)
      setDiffGenPokemons(
        genAmountPokemons[currentGen].diffOfPokeCurrGenAndPrevGen
      )
      setGenNumber(genAmountPokemons[currentGen].gen)
    }
  }, [currentGen])

  const { data, error } = useQuery<PokemonCard[]>(
    [
      `gen-${currentGen}-List`,
      currentGen,
      diffGenPokemons,
      previousGenPokemons
    ],
    async () => {
      const response = await api.get(
        `/?limit=${diffGenPokemons}&offset=${previousGenPokemons}`
      )

      response.data.results.forEach((item: PokemonCard, index: number) => {
        item.id = index + 1 + previousGenPokemons
      })

      return response.data.results
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60
    }
  )

  const [filteredPokemon, setFilteredPokemon] = useState<
    PokemonCard[] | undefined
  >([])

  useEffect(() => {
    setFilteredPokemon(data)
  }, [data])

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const searchByNameOrNumber = e.target.value
    const filter = data?.filter(pokemon => {
      return (
        pokemon.name
          .toLowerCase()
          .includes(searchByNameOrNumber.toLowerCase()) ||
        pokemon.id.toString() === searchByNameOrNumber ||
        pokemon.id.toString().padStart(3, '0') ===
          searchByNameOrNumber.padStart(3, '0')
      )
    })
    setFilteredPokemon(filter)
  }

  if (error) router.push('/404')

  if (genNumber) {
    return (
      <Container>
        <h2>Geração {genNumber}</h2>
        <InputContainer>
          <input
            type='text'
            placeholder='Pesquisar...'
            onChange={handleSearch}
          />
          <span className='material-symbols-outlined'>search</span>
        </InputContainer>
        <CardContainer>
          {filteredPokemon?.map((pokemon: PokemonCard) => (
            <Link href={`/pokemon/${pokemon.id}`} key={pokemon.id}>
              <a>
                <Card>
                  <Image
                    src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                    width='140'
                    height='140'
                    alt={pokemon.name}
                  />
                  <span>Nº{pokemon.id.toString().padStart(3, '0')}</span>
                  <p>{pokemon.name}</p>
                </Card>
              </a>
            </Link>
          ))}
        </CardContainer>
      </Container>
    )
  }
}

export default Generations
