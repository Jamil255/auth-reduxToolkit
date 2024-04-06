import React from 'react'
import Navbar from './components/Navbar'
import UserForm from './components/UserForm'
import { Routes,Route}from"react-router-dom"


const App = () => {
  return (
    <>
       <Navbar/>
          <Routes>
        <Route excat path="/" element={<UserForm />} />
      </Routes>
    </>
  )
}

export default App
