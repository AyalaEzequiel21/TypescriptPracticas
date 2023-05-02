import './App.css'
import { NavBar } from './components'
import { Home } from './pages'
import { LayoutConatiner } from './styledComponents'

function App() {

  return (
    <>
      <NavBar />
      <LayoutConatiner>
        <Home />
      </LayoutConatiner>
    </>
  )
}

export default App
