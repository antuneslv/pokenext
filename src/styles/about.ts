import { styled } from '@stitches/react'

export const Container = styled('div', {
  padding: '40px',
  maxWidth: '800px',
  margin: '0 auto',

  h2: {
    fontSize: '40px',
    fontFamily: '"pokemon-solid", sans-serif',
    letterSpacing: '2px',
    fontWeight: '200',
    textAlign: 'center',
    marginBottom: '20px'
  },

  p: {
    lineHeight: '2',
    marginBottom: '20px',

    '&:last-child': {
      textAlign: 'center',
      fontSize: '14px',
      marginTop: '200px',

      a: {
        color: '#fff'
      }
    }
  },

  a: {
    textDecoration: 'none',
    color: '#ff0000'
  }
})