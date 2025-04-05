import express from 'express';
import { router } from './routes/route';


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1",router);

app.listen(port , ()=>{
    console.log(`server running at port ${port}`)
})