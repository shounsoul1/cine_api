import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import router from './router/router.js';
dotenv.config()

const conexionUrl = process.env.URL
mongoose.connect(conexionUrl)
const database = mongoose.connection

database.on('error',(error)=>{
    console.log(error)
})

database.once('connected',()=>{
    console.log('Conexion exitosa 👌')
})

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.listen(process.env.PORT)
app.use('/api',router)
console.log(`Funcionando desde el puerto: ${process.env.PORT}`)