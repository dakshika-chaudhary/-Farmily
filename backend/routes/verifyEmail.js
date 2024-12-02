import express, { response } from 'express';
import User from '../models/User.js'; 
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import sendEmail from '../utils/sendEmail.js';

const router = express.Router();

router.post('/emailverify', async (req, res)=>{

try{
   const reqBody = await req.json();
   const {token} = reqBody
   console.log(token)

   const user = await User.findOne({
      verifyToken:token,
      verifyTokenExpiry:{$gt:Date.now()}})

      if(!user){
         return res.json({error:"Invalid token , user does not exixts"})
      }

      console.log(user);
      user.isVarified = true
      user.verifyToken=undefined
      user.verifyTokenExpiry=undefinded

      await user.save();
}
    catch(error){
       return res.json({error:error.message}); 
    }

}
)

export default router