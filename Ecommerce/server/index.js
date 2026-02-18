import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
import seedDb from './seed.js';
import productRoutes from './routes/productRoutes.js'

const app = express();
dotenv.config();
app.use(express.static(path.join(path.resolve(),'/public')))
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.set('view engine','ejs')
app.set('views',path.join(path.resolve(),'/views'))
app.use(express.json())

const MONGO_URI = process.env.mongodb_uri
const PORT = process.env.port

mongoose.connect(MONGO_URI)
.then(()=>{
    console.log('DB is connected')
    app.listen(PORT,()=>{
        console.log(`Server is running fine on ${PORT}`)
    })
})
.catch((err)=>{
    console.log('Error connecting to DB')
})

seedDb();

app.use('/product',productRoutes);

// app.get('/',(req,res)=>{
//     res.send('You are into my ecommerce project');
// })

