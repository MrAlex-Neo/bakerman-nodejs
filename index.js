const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/auth', authRouter)
app.use(cors());

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e){
        console.log(e)
    }
}

start()
