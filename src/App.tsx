import './App.css'
// import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/home'
// import Menu from './pages/menu'

function App() {
  return (
    <>
      <Home />
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
