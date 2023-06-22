import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Slider from '../Components/Slider'
import Products from '../Components/Products'
import Catg from '../Components/Catg'
// import IntroBlog from '../Components/IntroBlog'

function Home() {
  return (
    <>
        <Slider/>
        <Catg/>
        <Products/>
        {/* <IntroBlog/> */}
    </>
  )
}

export default Home