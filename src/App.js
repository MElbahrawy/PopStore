import "bootstrap/dist/css/bootstrap.css"
import React from "react";
import { CounterContextProvider } from './context/CounterContext';
import { CartContextProvider } from './context/CartContext';
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/nav'
import Footer from './components/footer'
import About from './components/about'
import Home from './routes/home'
import Shop from './routes/shop'
import Item from './routes/item'
import './App.css';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap');
</style>

function App() {

  return (
    <>
      <CounterContextProvider>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/shop/:id' element={<Item />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Navigate to="/home" />} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </CounterContextProvider>
    </>
  )
}

export default App;
