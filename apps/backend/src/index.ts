import express from 'express';
import { router } from './routes/route';
import prisma from '@repo/db';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1",router);

const db = prisma

app.listen(port , () => {
    console.log("Server is running at port " + port);
})