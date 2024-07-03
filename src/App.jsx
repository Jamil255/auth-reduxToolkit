import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import 'react-toastify/dist/ReactToastify.css'
import { Bounce, ToastContainer } from 'react-toastify'
// import Home from './components/Home'
import axios from 'axios'
import { useEffect } from 'react'
axios.defaults.withCredentials = true
const App = () => {
  const getCookiess = async () => {
    try {
      const Res = await axios.get('http://localhost:8080', {
        withCredentials: true,
      })
      console.log(Res)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path={'/signup'} element={<Signup />} />
        {/* <Route path={'/home'} element={<Home />} /> */}
      </Routes>
      <button onClick={getCookiess}>click</button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  )
}

export default App
