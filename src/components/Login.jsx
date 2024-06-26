import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postDataLogin } from '../store/slice/auth/loginSlice'
import ToastAlert from '../utills/toast'
import Cookies from 'universal-cookie'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { data, loading, error } = useSelector((state) => state.login)
  console.log(error)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postDataLogin({ email, password }))
    ToastAlert(
      data?.data?.message || error?.message,
      data?.data?.status || error?.status
    )
    // console.log(data?.data?.token)
    // Cookies.set('token', data?.data?.token, { expiresIn: '1d' })
    // const cookiess = Cookies.get('token')
    // console.log(cookiess)
    const cookies = new Cookies(null, { path: '/' })

    cookies.set('myCat', 'Pacman')
    console.log(cookies.get('myCat'))
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
