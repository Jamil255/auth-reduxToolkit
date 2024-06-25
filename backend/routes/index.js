import express from 'express'
import { createAccountFun, loginAccountFun } from '../controllers/user.js'
const routes = express.Router()

routes.post('/api/registar',createAccountFun)
routes.post('/api/login',loginAccountFun)
export default routes
