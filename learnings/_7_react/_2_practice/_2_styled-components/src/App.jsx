import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { ThemeProvider, createGlobalStyle } from 'styled-components'

import StyledButton, { FancyButton, SubmitButtom, AnimatedLogo, DarkButton } from './components/Button'

const theme = {
  dark: {
    primary: '#000',
    text: '#FFF',
  },
  light: {
    primary: '#FFF',
    text: '#000',
  },
  fontFamily: 'Segoe UI'
}

const GlobalStyle = createGlobalStyle`
  button {
    /* font-family: 'Roboto'; */
    font-family: ${(props) => props.theme.fontFamily};
  }
`

const App = () => {

  return (
    <ThemeProvider theme={theme} >
      <GlobalStyle  />
      <div className="App">
        <img src={reactLogo} className='logo' alt="logo" />
        <AnimatedLogo src={reactLogo} alt='logo' />
        <button>Button</button>
        <StyledButton type='submit' >Styled Button</StyledButton>
        <StyledButton variant='outline' >Styled Button</StyledButton>
        <FancyButton as={'a'} >Fancy Button</FancyButton>
        <SubmitButtom>Submit</SubmitButtom>
        <DarkButton>Dark Theme</DarkButton>
      </div>
    </ThemeProvider>
  )
}

export default App
