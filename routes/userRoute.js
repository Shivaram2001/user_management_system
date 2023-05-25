const express=require("express");

const route=express.Router();

const multer=require("multer"); 
const path=require("path");

const storage=multer.diskStorage(
    {
        destination:function(req,file,cb)
        {
            cb(null,path.join(__dirname,'../public/userImages'));
        },
        filename:function(req,file,cb)
        {
            const name=Date.now()+"-"+req.body.name;
            cb(null,name)
        }
    }
);

const upload=multer({storage:storage});

const userController=require("../controllers/userController");

route.get("/",userController.getUser);

route.post("/register",upload.single("image"),userController.addUser);

module.exports=route;