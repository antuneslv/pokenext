import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useQuery } from 'react-query'
import api from '../../../services/api'
import {
  Container,
  InputContainer, 
  CardContainer,
  Card
} from '../../styles/pokemons'

interface Pokemon {
  name: string
  url: string
  id: number
}

const GenFive = () => {
  const genFourPokemons = 493
  const genFivePokemons = 649 - genFourPokemons
  
  const { data } = useQuery<Pokemon[]>(
    'genFiveList',
    async () => {
      const response = await api.get(
        `/?limit=${genFivePokemons}&offset=${genFourPokemons}`
      )

      response.data.results.forEach((item: Pokemon, index: number) => {
        item.id = index + 1 + genFourPokemons
      })

      return response.data.results
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60
    }
  )

  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[] | undefined>(
    []
  )

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
        pokemon.id.toString() === searchByNameOrNumber
      )
    })
    setFilteredPokemon(filter)
  }

   return (
     <Container>
       <h2>Geração V</h2>
       <InputContainer>
         <input
           type='text'
           placeholder='Pesquisar...'
           onChange={handleSearch}
         />
         <span className='material-symbols-outlined'>search</span>
       </InputContainer>
       <CardContainer>
         {filteredPokemon?.map((pokemon: Pokemon) => (
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
export default GenFive
