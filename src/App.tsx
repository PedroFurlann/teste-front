import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Feed } from './pages/Feed'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

function App() {
  return (
    
    <ThemeProvider theme={defaultTheme}>
      <Feed />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
