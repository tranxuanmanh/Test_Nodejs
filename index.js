const express=require("express")
const app=express()
require("dotenv").config()
const port=process.env.PORT
const router=require("./Router/Client/index.router")

app.set("views","./views")
app.set("view engine","pug")

//Router
router(app)

app.listen(port,()=>{
    console.log("Dang chay cong: ",port)
})