import express from 'express'
import { createAccountFun, loginAccountFun } from '../controllers/user.js'
const routes = express.Router()

routes.post('/api/registar', createAccountFun)
routes.post('/api/login', loginAccountFun)
routes.get('/api/home', (req, res) => {
  try {
    res.cookie('user', 'user')
    res.end('Welcome')
  } catch (error) {
    console.log(error.message)
  }
})

export default routes
