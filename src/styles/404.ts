import { styled } from '@stitches/react'

export const Main = styled('main', {
  height: 'calc(100vh - 100px)',
  display: 'grid',
  justifyItems: 'center',
  alignContent: 'center',
  padding: '20px',
  color: '#b78282',

  h2: {
    fontSize: '80px',
  },

  h3: {
    fontSize: '48px',
  },

  p: {
    marginTop: '16px'
  },

  a: {
    color: 'inherit'
  }
})
