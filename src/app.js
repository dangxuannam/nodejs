
// const express = require('express')
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import categoryRouter from '../routes/category'
import productRoute from '../routes/product'
import mongoose from 'mongoose'

import authRouter from '../routes/auth'
import bookRouter from '../routes/book'

const app = express()
//middleware
app.use(cors())
app.use(morgan("tiny"))

app.use(express.json()) 
//router
app.use(productRoute)
app.use(categoryRouter)
app.use(authRouter )
app.use(bookRouter)
//connect database
mongoose.connect('mongodb://0.0.0.0:27017/')
.then(() => console.log('ket noi thanh cong'))
.catch((error) => console.log(error))
//connection
const PORT =process.env.PORT|| 8000;
app.listen(PORT, () => {
    console.log("da ket noi",PORT)
})
