import prisma from '@repo/db';
import express from 'express';
export const authRouter = express.Router();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { userMiddleware } from '../../middleware/userMiddleware';

dotenv.config();

const jwt_secret = process.env.JWt_SECRET_KEY || "leetcode_secret_key";

authRouter.post("/register",async (req,res)=>{
  const {username,password,email,role} = req.body;
  let confirmedUser = "";
  if(role == ""){
     confirmedUser = "USER";
  }
  else {
     confirmedUser = role;
  }
  if(username == "" || password == "" || email == "") {
       res.status(401).json({
          msg : "We need all the details here"
       })
  }

//   try {
     const hashedPassword = await bcrypt.hash(password,10);
     const user = await prisma.user.create({
          data : {
          username : username,
          password : hashedPassword,
          email : email,
          role : confirmedUser
          }
     })
     if(user) {
          res.status(200).json({
               msg : "user created successfully",
               userId : user.id
          })
     }
     // }catch(error){
     //      res.status(403).json({
     //           msg : "error happened",
     //           error : error
     //      })
     // }
})

authRouter.post("/login",async (req,res)=>{
     const {username , password } = req.body;
     if(username == "" || password == "") {
          res.status(401).json({
             msg : "We need all the details here"
          })
          return;
     }
     try {
          const user = await prisma.user.findUnique({
               where : {
                    username : username
               }
          })
          if(!user) {
               res.status(401).json({
                    msg : "user is not here"
               })
               return;
          }
          const userPassword = user.password;
          const comparePass = bcrypt.compare(password,userPassword);
          if(!comparePass){
               res.status(401).json({
                    msg : "user does not provide correct password"
               })
               return;
          }
     console.log(user);
       const token = jwt.sign(user,jwt_secret);
       res.status(200).json({
          token : token,
          msg : "user Loggin successfully"
     })

          
     }catch(err){
          res.status(403).json({
               msg : "error happened",
               error : err
          })
     }

})

authRouter.post("/logout",userMiddleware,async (req,res)=>{

    const userId = req.userId;
    
     res.status(200).json({
          userId : userId,
          msg : "logged successfully"
     })
})

authRouter.post("/reset",async (req,res)=>{
     const {email,newpassword} = req.body;
     try {
        const hashedpassword = jwt.sign(newpassword,jwt_secret);
         const updatePassword = await prisma.user.update({
               where : {
                   email : email
               },
               data : {
                    password : hashedpassword
               }
          })
     res.status(200).json({
          msg : "password reset successfully"
     })
     }catch {
          res.status(403).json({
               msg : "error happened will passowrd reset"
          })
     }
})