import { styled } from '@stitches/react'

export const Container = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '40px',

  h2: {
    textAlign: 'center',
    margin: '40px 0 80px',
    fontSize: '40px',
    fontFamily: '"Pokemon Solid", sans-serif',
    letterSpacing: '4px',
    fontWeight: '200'
  },

  a: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#ffffff',
    transition: 'all 0.2s',

    '&:hover': {
      transform: 'scale(1.05)'
    }
  }
})

export const InputContainer = styled('div', {
  width: '280px',
  height: '50px',
  padding: '8px 16px',
  borderRadius: '10px',
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center',
  margin: '0 auto 80px',

  '@media (min-width: 720px)': {
    width: '340px'
  },

  input: {
    border: '0',
    outline: '0',
    fontSize: '20px',
    width: '100%'
  },

  span: {
    color: '#767676'
  }
})

export const CardContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  justifyItems: 'center',
  gap: '60px'
})

export const Card = styled('article', {
  width: '300px',
  height: '400px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: '2px solid #ffffff',
  borderRadius: '30px',
  padding: '40px 20px',

  span: {
    color: '#b9b9b9'
  },

  p: {
    textTransform: 'capitalize',
    fontSize: '24px',
    fontWeight: 'bold'
  }
})