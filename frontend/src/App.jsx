import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import About from './Pages/About'
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Cart" element={<Cart/>} />
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
