import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import api from '../../../services/api'
import { Container, CardContainer, Card } from '../../styles/gen-one'

interface Pokemon {
  name: string
  url: string
  id: number
}

const GenOne = () => {
  const [pokemonGenOneList, setPokemonGenOneList] = useState([])

  const genOnePokemons = 151

   const getPokemonsGenOne = async () => {
     const response = await api.get(`/?limit=${genOnePokemons}`)

     response.data.results.forEach((item: Pokemon, index: number) => {
       item.id = index + 1
     })

     setPokemonGenOneList(response.data.results)
   }

   useEffect(() => {
     getPokemonsGenOne()
   }, [])

   return (
     <Container>
      <h1>Geração I</h1>
       <CardContainer>
         {pokemonGenOneList.map((pokemon: Pokemon) => (
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
export default GenOne
