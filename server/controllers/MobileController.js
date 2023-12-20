import Mobile from './../models/Mobile.js';

const mobilePostApi = async (req,res)=>{
    const {price, name, type, processor, memory, OS, image} = req.body;

    try{
        const mobileObj = new Mobile({
            price, 
            name, 
            type, 
            processor, 
            memory, 
            OS, 
            image
        })
        const savedMobile = await mobileObj.save();
        res.json({
            success:true,
            data:savedMobile,
            message:"successfully post mobile"
        })
    }catch(err){
        res.json({
            success:false,
            message:err.message
        })
    }
}

const mobileGetApi = async (req,res)=>{

const fetchmobilepost = await Mobile.find();

res.json({
    success:true,
    data:fetchmobilepost,
    message:"successfully fetch mobiles"
})
}

const mobileGetApibyId = async (req,res)=>{
const {_id} = req.params;
const findMobilebyId = await Mobile.findOne({_id:_id})

res.json({
    success:true,
    data:findMobilebyId,
    message:"successfully fetch mobole by id"
})
}

export {mobilePostApi, mobileGetApi, mobileGetApibyId}