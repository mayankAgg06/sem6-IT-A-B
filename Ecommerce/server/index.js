import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
dotenv.config();
app.use(cors());

const MONGO_URI = process.env.mongodb_uri
const PORT = process.env.port

mongoose.connect(MONGO_URI)
.then(()=>{
    console.log('DB is connected')
    app.listen(PORT,()=>{
        console.log('Server is running fine')
    })
})
.catch((err)=>{
    console.log('Error connecting to DB')
})

