import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
    },
    mobile:{
        type:Schema.Types.ObjectId,
        ref:'Mobile',
       
    },
    quantity:{
        type:Number,
        default:1,
        
    },
    deliveryCharge:{
        type:Number,
        default:0
    },
    shippingAddress : {
        type: String,
        
    },
    status:{
        type:String,
        default:"pending"
    }
},
{
    timestamps:true
})

const Order = model('Order',orderSchema)

export {Order}
