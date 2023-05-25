const User=require("../models/userModel");
const { use } = require("../routes/userRoute");

const addUser=async(req,res)=>{
    try{
        const user=new User({
            name:req.body.name,
            mobileNumber:req.body.mobileNumber,
            email:req.body.email,
            image:req.file.filename,
            password:req.body.password,
            is_admin:0,
            is_valid:0
        })
        const result=await User.insertMany([user]); 
        res.send(result);
    }catch(err)
    {
        res.send(err.message);
    }
}

const getUser=async(req,res)=>{
    try{
        let result=await User.find();
        res.send(result);
        }
    catch(err)
    {
        res.send(err.message);
    }
}

module.exports={
    addUser,
    getUser
}