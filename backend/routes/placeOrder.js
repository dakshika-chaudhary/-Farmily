const express = require('express');
const router = express.Router();

router.post('/api/orders',async(req,res)=>{
    const {items,totalPrice} = req.body;
})