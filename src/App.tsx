import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/home'
import Menu from './pages/menu'

function App() {
  return (
    <>
      <BrowserRouter basename="/PizzaNahora">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/menu" element={<Menu />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
