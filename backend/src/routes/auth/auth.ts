import express from 'express';
export const authRouter = express.Router();

authRouter.post("/",async (req,res)=>{
    const {username,password} = req.body;
    if(username === "admin" && password === "admin"){
         res.status(200).json({message:"Login successful"});
    }else{
         res.status(401).json({message:"Invalid credentials"});
         return;
    }
})