const express = require('express')
const cors = require('cors')
const { db } = require('./db/db')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

// Middlewares
app.use(express.json())
app.use(cors())

/* 
 *Testing connection on postman 
  app.get('/', (req,res)=>{
      res.send('Hello World')
  })
*/

const server =()=>{
  db()
  app.listen(PORT, () => {
    console.log( `Server is running on port ${PORT}`)
  })
}

server()