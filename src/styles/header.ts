import { styled } from '@stitches/react'

export const Container = styled('header', {
  height: '100px',
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #dbdbdb',
  '@media (min-width: 720px)': {
    padding: '20px 60px'
  },
  '@media (min-width: 1024px)': {
    padding: '20px 80px'
  },
  '@media (min-width: 1280px)': {
    padding: '20px 120px'
  }
})

export const Logo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',

  '> span': {
    display: 'none !important',

    '@media (min-width: 720px)': {
      display: 'inline-block !important'
    }
  },

  h1: {
    fontFamily: '"Pokemon Solid", sans-serif',
    letterSpacing: '2px',
    fontWeight: '200',
    transform: 'translateY(-8%)',
    span: {
      color: '#ff0000'
    }
  }
})

export const NavContainer = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '8px',

  '@media (min-width: 720px)': {
    gap: '16px'
  },

  button: {
    backgroundColor: 'transparent',
    border: '0',
    cursor: 'pointer',
    transition: 'all 0.3s',

    '&:hover': {
      color: '#ff0000'
    }
  },

  a: {
    textDecoration: 'none',

    '&:hover': {
      color: '#ff0000'
    }
  }
})
