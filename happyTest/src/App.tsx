import { Provider } from 'react-redux'
import './App.css'
import { NavBar } from './components'
import { Home } from './pages'
import { LayoutConatiner } from './styledComponents'
import { store } from './redux'

function App() {

  return (
    <Provider store={store}>
      <NavBar />
      <LayoutConatiner>
        <Home />
      </LayoutConatiner>
    </Provider>
  )
}

export default App
