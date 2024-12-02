//middleware will verify that user hai ya nahi hai
import jwt from "jsonwebtoken";

export const requireSignIn = (req,res,next)=>{
    // 
    
    const authHeader = req.header('Authorization');
if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization header missing or malformed for farmers crops.' });
}
const token = authHeader.split(' ')[1]
    //The term Authorization in the context of the header comes from the HTTP protocol, specifically designed for authentication and providing credentials.
    
    console.log('Authorization Header:', req.header('Authorization'));
    console.log('Token:', token);
    // req.header('Authorization'): Extracts the Authorization header from the incoming HTTP request.
// .split(' ')[1]: Splits the header's value by spaces and retrieves the second part. This is because the token is typically prefixed by a keyword like Bearer.
// The Authorization header is sent by the client (frontend) when making requests to the backend.


if (!token) {
    return res.status(401).json({message: "Authorization denied. No token provided." });
  }

  try{
    console.log('Inside farmerscrop Middleware');
    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET is not defined in the environment variables.');
      return res.status(500).json({ message: 'Internal server error. Please contact support.' });
  }
    const verified = jwt.verify(token,process.env.JWT_SECRET);
    req.user = verified;
    next();
  }
  catch (error) {
    console.error('Token verification error for farmerscrop:', error); 
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
         message: 'Token expired, please login again', 
         code: 'TOKEN_EXPIRED' 

       });
    }
    return res.status(400).json({ 
            message: 'Invalid token',
            code: 'INVALID_TOKEN',
           });
  }
  
};

export default requireSignIn;
