import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {globalStyles()}
    </>
  )
}

export default MyApp
