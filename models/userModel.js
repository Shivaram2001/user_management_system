const mongoose=require("mongoose");

const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        mobileNumber:{
            type:Number,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        image:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        is_admin:{
            type:Number,
            required:true
        },
        is_varified:{
            type:Number,
            dafault:0    
        }
    }
);

const User=new mongoose.model("user",userSchema);

module.exports=User;