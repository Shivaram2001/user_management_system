const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/userManagementSystem").then(()=>{
    console.log("Connected to database...");
}).catch((err)=>{
    console.log(err.message);
})