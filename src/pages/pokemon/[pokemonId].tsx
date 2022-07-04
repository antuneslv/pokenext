import { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import Image from 'next/image'
import api from '../../../services/api'
import {
  Container,
  NumberContainer,
  TypeContainer,
  Type,
  DataContainer,
  HightContainer,
} from '../../styles/pokemon'

interface Type {
  name: string
  url: string
}

interface PokemonType {
  slote: number
  type: Type
}

interface Pokemon {
  name: string
  types: PokemonType[]
  height: number
  weight: number
  id: string | string[] | undefined
}

const Pokemon = () => {
  const router = useRouter()
  const [pokemon, setPokemon] = useState<Pokemon>()
  const id = router.query.pokemonId


  const getPokemon = async () => {
    try {
      const response = await api.get(`/${id}`)   
      const { name, types, height, weight } = response.data
      setPokemon({name, types, height, weight, id})
    } catch (error) {
      Router.push('/')
    }
  }

  useEffect(() => {
    getPokemon()
  }, [])
  
  console.log(pokemon)

  if (pokemon) {
    return (
      <Container>
        <h1>{pokemon.name}</h1>
        <Image
          src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
          width='200'
          height='200'
          alt={pokemon.name}
        />
        <NumberContainer>
          <h2>Número:</h2>
          <p>#{pokemon.id?.toString().padStart(3, '0')}</p>
        </NumberContainer>
        <TypeContainer>
          <h3>Tipo:</h3>
          <div>
            {pokemon.types.map((item, index) => (
              <Type BackgroundColor={item.type.name} key={index}>
                {item.type.name}
              </Type>
            ))}
          </div>
        </TypeContainer>
        <DataContainer>
          <HightContainer>
            <h3>Altura:</h3>
            <p>{pokemon.height * 10} cm</p>
          </HightContainer>
          <div>
            <h3>Peso:</h3>
            <p>{pokemon.weight / 10} kg</p>
          </div>
        </DataContainer>
      </Container>
    )
  }
}

export default Pokemon