import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../styles/stitches.config'

function Document() {
  return (
    <Html>
      <Head>
        <meta name='description' content='Generated by create next app' />
        <style
          id='stitches'
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
