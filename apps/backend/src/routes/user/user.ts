import express from 'express';
import { userMiddleware } from '../../middleware/userMiddleware';
import prisma from '@repo/db';
export const userRouter = express.Router();

userRouter.get("/profile",userMiddleware,async (req,res)=>{
       const userId = req.userId;
       try {
           const user = await prisma.user.findUnique({
                 where : {
                    id : userId
                 },
                 omit : {
                    password : true
                 }
           })
           res.status(200).json({
            msg : "user found",
            user : user
           })
       }catch {
        res.status(403).json({
            msg : "error happened getting profile"
        })
       }
})

userRouter.put("/profile",userMiddleware,async (req,res)=>{
    const {updatedUsername} = req.body;
    const userId = req.userId;
    try {
        const updateUser = await prisma.user.update({
            where : {id : userId},
            data : {username : updatedUsername},
            select : {
                id : true,
                username : true,
                email : true, 
                ranking : true
            }
        })
        res.status(200).json({
            msg : "User profile updated",
            user : updateUser 
        })
    }catch {
        res.status(403).json({
            msg : "error happened while updating"
        })
    }
}
)