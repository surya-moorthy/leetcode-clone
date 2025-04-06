import express from 'express';
import { authRouter } from './auth/auth';
import { problemsRouter } from './problems/problems.';
import { submissionsRouter } from './submissions/submissions';
import { competitionRouter } from './competitions/competitioons';
import { userRouter } from './user/user';
export const router = express.Router();

router.use("/auth",authRouter);
router.use("/user",userRouter);
router.use("/problems",problemsRouter);
router.use("/submissions",submissionsRouter);
router.use("competitions",competitionRouter);
