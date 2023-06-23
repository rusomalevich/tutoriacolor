import './App.css'
import { ColorCard, Button, Navbar} from './components'

const App = () => {

  const saludar = () => {
    alert('Hola ')
  }

  return (
    <>
      <Navbar />
      <ColorCard colors={['001C30', '176B87', '64CCC5', 'DAFFFB']} likes={259} horas={23} />
    </>
  )
}

export default App
