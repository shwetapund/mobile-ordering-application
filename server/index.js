import express from "express";
import mongoose from "mongoose";
import dotenv, { config } from 'dotenv';
dotenv.config();
import {mobilePostApi, mobileGetApi, mobileGetApibyId} from './controllers/MobileController.js';
import {orderApi} from "./controllers/OrderController.js";
import {signUpPostApi, loginPostApi} from "./controllers/UserController.js";

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


app.post('/api/v1/mobiles',mobilePostApi)

app.get('/api/v1/mobiles',mobileGetApi)

app.get('/api/v1/mobile/:_id',mobileGetApibyId)

app.post('/api/v1/signup',signUpPostApi)

app.post('/api/v1/login',loginPostApi)

app.post('/api/v1/orders',orderApi)

app.listen(PORT, (req,res)=>{
    console.log(`server is running on ${PORT}`);
})

