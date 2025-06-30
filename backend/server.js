import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import ConnectToDataBase from './config/database.js';
import authRoute from './routes/authRoutes.js'
import path from 'path';
import { fileURLToPath } from 'url';
import {incomeRoutes} from './routes/incomeRoutes.js'



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json())
app.use('/api/v1/auth' , authRoute);
app.use('/api/v1/income' , incomeRoutes);


const startServer=async()=>{
    try{
        await ConnectToDataBase();
        app.listen(port , ()=>{
            console.log(`Server Started At http://localhost:${port}`)
        })
    }catch(err){
        console.log("Something went Wrong While Starting Server");
    }
}
startServer();

app.use("/uploads" , express.static(path.join(__dirname , "uploads")));

