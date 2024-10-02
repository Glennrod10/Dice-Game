import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './component/login/Login'
import { Header } from './component/Header'
import Register from './component/login/Register'
import Contact from './component/Contact'
import NotFound from './component/NotFound'
import StartGame from './component/dice game/StartGame'
import GamePlay from './component/dice game/GamePlay'
import ContactBook from './component/contactBook/ContactBook'


const Path = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="dice" element={<StartGame />} />
        <Route path="play" element={<GamePlay />} />
        <Route path="register" element={<Register />} />
        <Route path="contact" element={<Contact />} />
        <Route path="contact-book" element={<ContactBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Path
