const express=require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config()
const connection=require('./db/connection')
const userRoutes = require('./routes/userRoutes')

connection()

const cors = require('cors')
app.use(cors())

//Multer > File/Image Upload
//we want some data to be sent out >> what method would be used? > POST

app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Welcome to MovieStation")
})

app.use(userRoutes)

//server Start:
const PORT =8000
app.listen(PORT,()=>{
    console.log("Server Started at PORT",PORT)
})
