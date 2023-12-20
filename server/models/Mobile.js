import { Schema, model } from "mongoose";

const mobileSchema = new Schema({
    //price, name, type, processor, memory, OS
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    processor:{
        type:String,
        required:true
    },
    memory:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
},
{
    timestamps:true
}
)

const Mobile = model('Mobile',mobileSchema);

export default Mobile