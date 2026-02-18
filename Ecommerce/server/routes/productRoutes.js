import express from 'express';
import Product from '../models/productModel.js';

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('This is coming from router')
})

router.get('/all',async (req,res)=>{
    const products = await Product.find({});
    res.json({products});
})
export default router;