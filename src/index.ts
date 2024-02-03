import express from 'express'
import dotenv from 'dotenv'
import router from './route/masterRoute'
const app = express()
dotenv.config()

app.use(router)
app.listen(3000, () => console.log('The server is running on http://localhost:3000'))