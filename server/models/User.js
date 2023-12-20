import { Schema, model } from "mongoose";

const userSchema = new Schema({
    //name, email, password, mobileNo, address, gender

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    mobileNo:{
        type:Number,
        required:true
    },
    address:{
        type:String,
    },
    gender:{
        type:String
    }
    
})

const User = model('User',userSchema)

export {User}