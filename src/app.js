
// const express = require('express')
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import productRoute from '../routes/product'
import mongoose from 'mongoose'


const app = express()
//middleware
app.use(cors())
app.use(morgan("tiny"))

app.use(express.json()) 
//router
app.use("/api", productRoute)
//connect database
mongoose.connect('mongodb://localhost:27017/web16309')
.then(() => console.log('ket noi thanh cong'))
.catch((error) => console.log(error))
//connection
const PORT = 3001;
app.listen(PORT, () => {
    console.log("da ket noi",PORT)
})