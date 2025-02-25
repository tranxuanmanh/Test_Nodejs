module.exports.index=(req,res)=>{
    res.render("Client/pages/Product/index")
}
module.exports.add=(req,res)=>{
    res.send("Trang them san pham")
 }

 module.exports.edit=(req,res)=>{
    res.send("Trang sua san pham")
}
module.exports.delete=(req,res)=>{
    res.send("Trang xoa san pham")
}