import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  body: {
    backgroundColor: '$dark',
    color: '#fff',
    fontFamily: '"Roboto", sans-serif'
  },

  button: {
    color: '#fff',
    fontFamily: '"Roboto", sans-serif',
    fontSize: 'inherit'
  },
  
  a: {
    color: '#fff',
    fontFamily: '"Roboto", sans-serif'
  }
})
