import express from 'express';
import { userMiddleware } from '../../middleware/userMiddleware';
import prisma from '@repo/db';
export const submissionsRouter = express.Router();

submissionsRouter.post("/",userMiddleware,async (req,res)=>{
    const { problemId, code, language } = req.body;
    const user = req.userId;
    if (!user) {
         res.status(400).json({ error: "User ID is required" });
         return;
    }
    try {
        const submissions = await prisma.submission.create({
            data : {
                problemId: problemId,
                code: code,
                language: language,
                status: "PENDING",
                testCasesPassed: 0, 
                memoryUsed : "0",
                userId: user
            } 
        });
        res.status(200).json(submissions);
    } catch (error) {
        res.status(403).json({ error: "Failed to create submission" });
    }
})
submissionsRouter.get("/",userMiddleware,async (req,res)=>{
    const id = req.query.id;
    const  userId = req.userId;

    if (typeof id !== 'string') {
         res.status(400).json({ error: "Invalid submission ID" });
         return;
      }
    try {
        const submissions = await prisma.submission.findUnique({
            where : {
                id : id,
                userId : userId
            }
        })
        res.status(200).json(submissions);
    } catch (error) {
        res.status(403).json({ error: "Failed to create submission" });
    }
})
submissionsRouter.get("/",async (req,res)=>{
    const {topic } = req.query;
    try {
        const problems = await prisma.submission.findMany()
        res.status(200).json({
            problems : problems
        })
    }
    catch{
        res.status(403).json({
            msg : "error happened while fetching problems"
        })
    }
})