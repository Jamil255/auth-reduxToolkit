import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../config'

const Home = () => {
  useEffect( async() => {
    const userRes = await axios.get(`${BASE_URL}/home`)
    console.log(userRes)
  }, [])
  return <div></div>
}

export default Home
