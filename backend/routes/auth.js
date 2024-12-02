import express, { response } from 'express';
import User from '../models/User.js'; 
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import sendEmail from '../utils/sendEmail.js';


const router = express.Router();


// Farmer Register
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      
    });

    // Save the user to the database
    const savedUser = await newUser.save();
    console.log(savedUser);

    // as we have saved the user now we need to send the mail
await sendEmail({email,emailType:"VERIFY",userId:savedUser._id});
return res.json({
  message:"User registered successfully",
  success:true,
  savedUser
})

  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Farmer Login
router.post('/login', async (req, res) => {
  const { firstName , email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ 
      // to enter any one among them
      $or: [{firstName},{email}]  

     });

     console.log("Found User:", user);

    if (!user) {
      return res.status(404).json({ message: 'User with email or firstname not found' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide both email and password' });
    }

    // Generate JWT Token -- json web token
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );

    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: '7d'}
    );

    console.log("Generated Token:", token);
    // Success response with token
    res.status(200).json({
      message: 'Login successful',
      success:true,
      token, // Returning the token so it can be used by the frontend
      refreshToken,
    });

  } catch (error) {
    res.status(500).json({ message: 'Server error',error });
    console.error(error);
  }
});

// Refresh Token Route
// router.post('/refresh-token', async (req, res) => {
//   const { refreshToken } = req.body;

//   if (!refreshToken) {
//     return res.status(400).json({ message: 'Refresh token is required' });
//   }

//   try {
//     // Verify the refresh token
//     const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

//     // Optionally, check the user still exists in the database
//     const user = await User.findById(decoded.id);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });

//     }

//     // Generate a new access token
//     const newAccessToken = jwt.sign(
//       { email: user.email, id: user._id },
//       process.env.JWT_SECRET,
//       { expiresIn: '15m' } // Set a shorter expiration time for the access token
//     );

//     res.status(200).json({
//       success: true,
//       accessToken: newAccessToken,
//     });
//   } catch (error) {
//     console.error('Error refreshing token:', error);
//     if (error.name === 'TokenExpiredError') {
//       return res.status(401).json({ message: 'Refresh token expired. Please log in again.' });
//     }
//     res.status(400).json({ message: 'Invalid refresh token' });
//   }
// });

router.post('/refresh-token', async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).json({ message: 'Refresh token is required' });
  }

  try {
    // Verify the refresh token
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    // Optionally, check the user still exists in the database
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate a new access token
    const newAccessToken = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '15m' } // Adjust expiration time as needed
    );

    res.status(200).json({
      success: true,
      accessToken: newAccessToken,
    });
  } catch (error) {
    console.error('Error refreshing token:', error);
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Refresh token expired. Please log in again.' });
    }
    res.status(400).json({ message: 'Invalid refresh token' });
  }
});


export default router;
