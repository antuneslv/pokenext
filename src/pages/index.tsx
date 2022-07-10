import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Main, LinksContainer } from '../styles'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <link rel='icon' href='/images/favicon.ico' />
        <title>Poke Dex</title>
      </Head>
      <Main>
        <h2>
          Poké<span>Next</span>
        </h2>
        <LinksContainer>
          <Link href='/gen-one'>
            <a>Gen I</a>
          </Link>
          <Link href='/gen-two'>
            <a>Gen II</a>
          </Link>
          <Link href='/gen-three'>
            <a>Gen III</a>
          </Link>
          <Link href='/gen-four'>
            <a>Gen IV</a>
          </Link>
          <Link href='/gen-five'>
            <a>Gen V</a>
          </Link>
          <Link href='/gen-six'>
            <a>Gen VI</a>
          </Link>
          <Link href='/gen-seven'>
            <a>Gen VII</a>
          </Link>
          <Link href='/gen-eight'>
            <a>Gen VIII</a>
          </Link>
        </LinksContainer>
      </Main>
    </>
  )
}

export default Home
