import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'

const Home: NextPage = () => {

  const genTwoPokemons = 251
  const genThreePokemons = 386
  const genFourPokemons = 493
  const genFivePokemons = 649
  const genSixPokemons = 721
  const genSevenPokemons = 809
  const genEightPokemons = 905

  return (
    <div>
      <Head>
        <link rel='icon' href='/images/favicon.ico' />
        <title>Poke Dex</title>
      </Head>
      <h1>Poke Dex</h1>
    </div>
  )
}

export default Home
