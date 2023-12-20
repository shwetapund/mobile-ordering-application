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
        required:unique,
        required:true
    },
    mobileNo:{
        type:String,
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