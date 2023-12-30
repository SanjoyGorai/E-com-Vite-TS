import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/app.scss'
import Home from './pages/Home.tsx'
import Search from './pages/Search.tsx'
import Cart from './pages/Cart.tsx'

const App = () => {
  return (
    <Router>
      {/* Header */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </Router>
  )
}

export default App