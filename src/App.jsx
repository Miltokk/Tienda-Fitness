import reactLogo from './assets/Logo.svg';
import viteLogo from '/vite.svg';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
        <Route path="/" />
        <Route path="/categoria/:id" element={<ItemListContainer/>} />
        <Route path="/ItemDetailContainer/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
