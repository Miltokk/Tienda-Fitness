import reactLogo from './assets/Logo.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer titulo='Hola Bienvenido a mi tienda de suplementos'/>
    </>
  )
}

export default App
