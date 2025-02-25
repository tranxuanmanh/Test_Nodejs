const express=require("express")
const Router=express.Router();
const controller=require("../../controller/Client/product.controller")

Router.get("/",controller.index)

Router.get("/add",controller.add)

Router.get("/edit",controller.edit)

Router.get("/delete",controller.delete);

module.exports=Router