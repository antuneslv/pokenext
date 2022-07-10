import type { AppProps } from 'next/app'
import MainContainer from '../components/main-container'
import { globalStyles } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
      {globalStyles()}
    </>
  )
}

export default MyApp
