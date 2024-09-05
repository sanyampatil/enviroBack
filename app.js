import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'PUT']
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// import routes files
import contactRouter from './Route/contactRoute.js'

// start routes..............

app.use('/user', contactRouter)
// end routes..............

export default app
