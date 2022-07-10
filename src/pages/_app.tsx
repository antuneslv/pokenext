import type { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '../../services/queryClient'
import MainContainer from '../components/main-container'
import { globalStyles } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </QueryClientProvider>
      {globalStyles()}
    </>
  )
}

export default MyApp
