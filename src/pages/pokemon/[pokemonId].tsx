import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useQuery } from 'react-query'
import api from '../../../services/api'
import {
  Container,
  NumberContainer,
  TypeContainer,
  Type,
  DataContainer,
  HightContainer,
} from '../../styles/pokemon'

interface Pokemon {
  name: string
  types: [
    {
      type: {
        name:
          | 'normal'
          | 'fire'
          | 'water'
          | 'electric'
          | 'grass'
          | 'ice'
          | 'fighting'
          | 'poison'
          | 'ground'
          | 'flying'
          | 'psychic'
          | 'bug'
          | 'rock'
          | 'ghost'
          | 'dragon'
          | 'dark'
          | 'steel'
          | 'fairy'
      }
    }
  ]
  height: number
  weight: number
  id: string | string[] | undefined
}

const Pokemon = () => {
  const router = useRouter()
  const [id, setId] = useState('')

  useEffect(() => {
    if (router.isReady) {
      setId(router.query.pokemonId as string)
    }
  }, [router.isReady, router.query.pokemonId])

  const { data, error } = useQuery<Pokemon>(
    ['pokemon', id],
    async () => {
      const response = await api.get(`/${id}`) 
      const { name, types, height, weight } = response.data

      return { name, types, height, weight, id }
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60
    }
  )

  if (error) router.push('/404')

  if (id && data) {
    return (
      <Container>
        <h1>{data.name}</h1>
        <Image
          src={`https://cdn.traction.one/pokedex/pokemon/${data.id}.png`}
          width='200'
          height='200'
          alt={data.name}
        />
        <NumberContainer>
          <h2>Número:</h2>
          <p>#{data.id?.toString().padStart(3, '0')}</p>
        </NumberContainer>
        <TypeContainer>
          <h3>Tipo:</h3>
          <div>
            {data.types.map((item, index) => (
              <Type BackgroundColor={item.type.name} key={index}>
                {item.type.name}
              </Type>
            ))}
          </div>
        </TypeContainer>
        <DataContainer>
          <HightContainer>
            <h3>Altura:</h3>
            <p>{data.height * 10} cm</p>
          </HightContainer>
          <div>
            <h3>Peso:</h3>
            <p>{data.weight / 10} kg</p>
          </div>
        </DataContainer>
      </Container>
    )
  }
}

export default Pokemon
