import { styled } from '@stitches/react'

export const Container = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '40px',

  h1: {
    textAlign: 'center',
    margin: '80px 0'
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

export const CardContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: '60px'
})

export const Card = styled('article', {
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