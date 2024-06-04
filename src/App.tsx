import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/home'
import Menu from './pages/menu'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/PizzaNaHora' element={<Home />} />
          <Route path='/PizzaNaHora/menu' element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
