import reactLogo from './assets/Logo.svg';
import viteLogo from '/vite.svg';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
function App() {
  return (
    <CartProvider>
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
        <Route path="/" />
        <Route path="/categoria/:id" element={<ItemListContainer/>} />
        <Route path="/ItemDetailContainer/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
    </CartProvider>
    
  )
}

export default App
