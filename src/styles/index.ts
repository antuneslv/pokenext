import { styled } from '@stitches/react'

export const Main = styled('main', {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '40px',

  h2: {
    fontFamily: '"pokemon-solid", sans-serif',
    letterSpacing: '2px',
    fontWeight: '200',
    fontSize: '40px',
    textAlign: 'center',

    span: {
      color: '#ff0000'
    }
  }
})

export const LinksContainer = styled('div', {
  marginTop: '40px',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: '40px',

  '@media (min-width: 720px)': {
    marginTop: '60px',
    gap: '60px'
  },
  '@media (min-width: 1024px)': {
    marginTop: '80px'
  },

  a: {
    border: '1px solid #fff',
    width: '100px',
    height: '50px',
    borderRadius: '40px',
    textAlign: 'center',
    lineHeight: '3',
    textDecoration: 'none',
    margin: '0 auto',
    transition: 'all 0.3s',

    '&:hover': {
      backgroundColor: '#ff0000'
    }
  }
})
