import express from 'express'
import oracleDatabase from './database/oracledb'
const app = express()

oracleDatabase.oracleDatabase()
app.listen(3000, () => console.log('The server is running on http://localhost:3000'))