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
    origin: 'http://localhost:5173',
    credentials: true,
  })
)
app.use(cookieParser())
app.use(routes)
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
