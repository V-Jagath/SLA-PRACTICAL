import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import HomePage from './components/HomePage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App