import express from 'express';
import { userMiddleware } from '../../middleware/userMiddleware';
import prisma from '@repo/db';
import { adminMiddleware } from '../../middleware/adminMiddleware';
export const problemsRouter = express.Router();

problemsRouter.get("/",async (req,res)=>{
    const {topic } = req.query;
    try {
        const problems = await prisma.problem.findMany({
            where : {
                topic: typeof topic === 'string' ? topic : undefined
            }
        })
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
problemsRouter.get("/problems/:id",async (req,res)=>{
     const id = req.params.id;
     try {
        const problem = await prisma.problem.findFirst({
            where : {
                id : id
            },
            select : {
                topic : true,
                title: true,
                description : true
            }
        })
        console.log(problem);
        res.status(200).json({
            problem : problem
        })
     }catch {
        res.status(403).json({
            msg : "Error happened while getting the specific problem"
        })
     }
})
problemsRouter.post("/",adminMiddleware,async (req,res)=>{
    const {title,description,topic,difficulty} = req.body;
    
    try {
        const problem = await prisma.problem.create({
            data : {
                title : title,
                description : description,
                topic : topic,
                difficulty : difficulty
            }
        })

        res.status(200).json({
            msg : "Problem created",
            problem : problem   
        })
    }catch {
        res.status(403).json({
            msg : "Error happened while creating the specific problem"
        })
    }
})
problemsRouter.post("/bulk-create", adminMiddleware, async (req, res) => {
    const { problemArray } = req.body;
    console.log(problemArray);

    if (!Array.isArray(problemArray) || problemArray.length === 0) {
         res.status(400).json({
            msg: "Invalid or empty problem array provided."
        });
        return
    }

    try {
        const result = await prisma.problem.createMany({
            data: problemArray,
            skipDuplicates: true,
        });

        res.status(200).json({
            msg: "Problems created successfully.",
            count: result.count,
        });
    } catch (error) {
        console.error("Bulk create error:", error);

        res.status(500).json({
            msg: "An error occurred while creating problems.",
            error: error,
        });
    }
});


problemsRouter.put("/:id",adminMiddleware,async (req,res)=>{
    const problemId = req.params.id;
    const data= req.body;
    
    try {
        const problem = await prisma.problem.update({
            where : {
                  id : problemId
            },
            data : data
        })

        res.status(200).json({
            msg : "Problem created",
            problem : problem   
        })
    }catch {
        res.status(403).json({
            msg : "Error happened while creating the specific problem"
        })
    }
})

problemsRouter.delete("/:id",adminMiddleware,async (req,res)=>{
   const problemId = typeof req.query.id === 'string' ? req.query.id : undefined;
    
    try {
        if (!problemId) {
             res.status(400).json({
                msg: "Invalid problem ID."
            });
            return
        }

        const problem = await prisma.problem.delete({
            where : {
                id : problemId
            }
        })

        res.status(200).json({
            msg : "Problem created",
            problem : problem   
        })
    }catch {
        res.status(403).json({
            msg : "Error happened while creating the specific problem"
        })
    }
})



