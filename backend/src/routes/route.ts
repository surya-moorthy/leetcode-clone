import express from 'express';
import { authRouter } from './auth/auth';
import { problemsRouter } from './problems/problems.';
import { submissionsRouter } from './submissions/submissions';
import { competitionRouter } from './competitions/competitioons';
export const router = express.Router();

router.use("/auth",authRouter);
router.use("/problems",problemsRouter);
router.use("/submissions",submissionsRouter);
router.use("competitions",competitionRouter);
