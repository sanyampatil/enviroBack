import { config } from 'dotenv'
config()

import app from './app.js'
import connectionDB from './db/connectionDB.js'

app.listen(process.env.PORT, () => {
  connectionDB()
  console.log('backend runing', process.env.PORT)
})
