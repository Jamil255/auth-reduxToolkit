import express from 'express'
import cors from 'cors'
import routes from './routes/index.js'
import { connectDb } from './config/db.js'
import cookieParser from 'cookie-parser'
const app = express()
const PORT = process.env.PORT || 8080
connectDb()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: '*',
  })
)
app.use(cookieParser())
app.use(routes)
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
