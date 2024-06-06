import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Menu from './pages/menu'

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
