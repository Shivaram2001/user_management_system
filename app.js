const db=require("./db/db");

const express=require("express");
const app=express();

const bodyParser=require("body-parser");



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const userRoutes=require("./routes/userRoute");

app.use("/",userRoutes);

app.listen(3000,()=>{
    console.log("Listening....");
})