import { Order } from "./../models/Order.js";

const orderApi = async (req,res)=>{
    const {user, mobile, quantity, shippingAddress, deliveryCharge, status} = req.body;

    const orderObj = new Order({
        user, 
        mobile,
        quantity, 
        shippingAddress, 
        deliveryCharge,
        status
    })
    const savedOrder = await orderObj.save();

    res.json({
        success:true,
        data:savedOrder,
        message:"successfully order"
    })
}

export {orderApi}