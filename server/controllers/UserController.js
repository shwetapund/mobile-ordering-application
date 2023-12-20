import {User} from "./../models/User.js";

const signUpPostApi = async (req,res)=>{
    try{
        const {name, email, password, mobileNo, address, gender} = req.body;

    const loginObj = new User({
        name,
        email, 
        password,
        mobileNo,
        address, 
        gender
    })
    const UserSaved = await loginObj.save();

    res.json({
        success:true,
        data:UserSaved,
        message:"successfully "
    })
    }
    catch(err){
        res.json({
            success:true,
            message:err.message
        })
    }
}

export {signUpPostApi}