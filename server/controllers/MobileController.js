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

export {mobilePostApi}