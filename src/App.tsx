import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/styles/global.tsx'
import { BarbieTheme } from './styles/themes/barbie.ts'
import { DarkTheme } from './styles/themes/darkTheme.ts'
import { LightTheme } from './styles/themes/lightTheme.ts'
import { Header } from './components/header/index.tsx'
import { Footer } from './components/footer/index.tsx'
import { Router } from './routes.tsx'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  const [theme, setTheme] = useState(BarbieTheme)
  const toggleDarkTheme = () => setTheme(DarkTheme)
  const toggleLightTheme = () => setTheme(LightTheme)
  const toggleBarbieTheme = () => setTheme(BarbieTheme)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
      <Footer
        toggleDarkTheme={toggleDarkTheme}
        toggleLightTheme={toggleLightTheme}
        toggleBarbieTheme={toggleBarbieTheme}
      />
    </ThemeProvider>
  )
}
