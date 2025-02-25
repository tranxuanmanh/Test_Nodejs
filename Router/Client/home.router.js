const express=require("express")
const Router=express.Router();
const controller=require("../../controller/Client/home.controller")

Router.get("/",controller.index)
Router.get("/detail",controller.detail)
module.exports=Router