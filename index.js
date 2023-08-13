const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000
const corsOptions = {
    allowedHeaders: ['Content-Type'], // Добавьте сюда другие разрешенные заголовки, если это необходимо
  };
  
const app = express()

app.use(express.json())
app.use('/auth', authRouter)
app.use(cors(corsOptions));

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e){
        console.log(e)
    }
}
start()