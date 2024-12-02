import express from 'express';
import CUser from '../models/CUser.js'; 
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
const router = express.Router();

//Customer Register
router.post('/register',async(req,res)=>{
    const {firstName,lastName,email,password} = req.body;
    try{
        const existingUser = await CUser.findOne({email});
        if(existingUser){
            return res.status(400).json({message:'user alresdy exists'});

        }
        const hashedPassword = await bcrypt.hash(password, 10);

         // Create new user
        const newUser = new CUser({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      }); 

      //save user to database 
      await newUser.save();

      //success response
      console.log("user registered")
      res.status(200).json({ message: 'User registered successfully' });

    }
    catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Server error' });
      }
})

//farmer login route
router.post('/login' , async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await CUser.findOne({email});

        if(!user){
            return res.status(404).json({message:'User with email not found'})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful',token });
    }
    catch(error){
        res.status(500).json({ message: 'Server error' });
        console.error(error);
    }
});

export default router;