import express from "express";
import mongoose from "mongoose";
import dotenv, { config } from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

const connectMongoDB = async (req,res)=>{
    const conn = await mongoose.connect(process.env.MONGODB_URL)
    if(conn){
        console.log('mongoDB is connected💖')
    }
}
connectMongoDB();

app.listen(PORT, (req,res)=>{
    console.log(`server is running on ${PORT}`);
})