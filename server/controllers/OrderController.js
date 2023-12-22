import Mobile from "../models/Mobile.js";
import { Order } from "./../models/Order.js";

const orderApi = async (req, res) => {
    const { user, mobile, quantity, shippingAddress, deliveryCharge, status } = req.body;

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
        success: true,
        data: savedOrder,
        message: "successfully order"
    })
}

const searchOrder = async (req, res) => {
    const { q } = req.query;
//price, name, type, processor, memory, OS, image
   try{
    const searchMobiles = await Mobile.find({
        $or: [
                {name: { $regex: q, $options: 'i' } },
                {price: { $regex: q, $options: 'i' }},
                {type: { $regex: q, $options: 'i' }},
                {processor: { $regex: q, $options: 'i'}},
                {memory: { $regex: q, $options: 'i'}},
                {OS: { $regex: q, $options:'i'}}
              ]
        })
    res.json({
        success: true,
        data: searchMobiles,
        message: "mobile is find"
    })
   }
   catch(err){
    res.json({
        success:false,
        message:err.message
    })
   }
}

const fetchUserOrders = async (req,res)=>{
    try{
        const { id } = req.params

    const findOrders = await Order.find({ user: { _id: id } }).populate('user Mobile')
    res.json({
        success:true,
        data:findOrders,
        message:" Mobiles fetch successfully..!"  
      })
    }catch(err){
        res.status(404).json({
            success:false,
            err:err.message
        })
    }
}

export { orderApi, searchOrder, fetchUserOrders}