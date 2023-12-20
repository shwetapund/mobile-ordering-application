import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    mobile:{
        type:Schema.Types.ObjectId,
        ref:'Mobile',
        required:true
    },
    quantity:{
        type:Number,
        default:1,
        required:true
    },
    deliveryCharge:{
        type:Number,
        default:0
    },
    shippingAddress : {
        type: String,
        required:true
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
