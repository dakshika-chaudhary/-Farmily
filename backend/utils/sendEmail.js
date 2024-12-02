
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const sendEmail = async({email,emailType,userId})=>{

    try{
     //to generate token 
const hashedToken = await bcrypt.hash(userId.toString(),10)

      if(emailType == "VERIFY"){
        await User.findByIdAndUpdate(userId,
          {verifyToken:hashedToken,
            verifyTokenExpiry:Date.now()+3600000
          }
        )
      }
      else if(emailType === "RESET"){
        await User.findByIdAndUpdate(userId,
          {forgetPassword : hashedToken,
            forgetPasswordExpiry:Date.now()+3600000
          }
        )
      }
      
        var transport = nodemailer.createTransport({
          host: "sandbox.smtp.mailtrap.io",
          port: 2525,
          auth: {
            user: "9e93e492c8fa5d",
            pass: "********4e5d"
          }
        });

          const mailOptions = {
            from: 'abc@gmail.com',
            to: email,
            subject:emailType === 'VERIFY'?"verify your email":"reset your password",
            text: `<p>Click<a href="${process.env.DOMAIN}">here</a>to ${emailType==="VERIFY"?"verify your email": "reset your password"} or copy and paste the below URL in your browser
            <br>
            ${process.env.DOMAIN}/verifyEmail?token=${hashedToken}</p>`,
        };

        const mailResponse = await transport.sendMail(mailOptions);
        console.log('Email sent successfully');

    }
    catch(error){
    console.log('Error sending email:',error);

    }
}

export default sendEmail;