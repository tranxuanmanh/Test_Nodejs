const express=require("express")
const Router=express.Router();
const controller=require("../../controller/Client/home.controller")

Router.get("/",controller.index)
module.exports=Router