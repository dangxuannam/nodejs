// const products = [
//     {id: 1, name: "products A"},
//     {id: 2, name: "products B"},
// ];
// import mongoose from "mongoose";    
// const Product = mongoose.model('Product', { name:String });
import Product from "../models/Product";
export const list = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    }
    catch(error)  {
        res.status(400).json({
            message: " khong tim thay"
        })
    }
};
 export const read = async (req, res) => {
    // res.json(products.find(item => item.id === +req.params.id))
    try{
        const filter = {_id: req.params.id}
        const product =  await Product.findOne(filter)
        res.json(product)
    }
    catch(error) {
        res.status(400).json({
            message: "k tim thay"
        })
    }
};
export const remove = async (req, res) => { 
    const condition = { _id: req.params.id }
    try{
        const product =  await Product.findOneAndDelete(condition)
        res.json({
            message:"da xoa thanh cong",
            data: product
        });
    }
    catch (error) {
        res.status(400).json({
            message:"chua xoa dc"
        })
    }
    // res.json(products.filter(item => item.id !== +req.params.id))
 }
 // them san pham
 export const create = async (req, res) => {
   try{
       const product = await new Product(req.body).save()
       res.json(product)
   }    
   catch (error) {
       res.status(400).json({
           message: "khong dc them san pham"
       })
   }
}
export const update = async (req, res) => {
    const condition = { _id: req.params.id }
    const doc = req.body;
    const option = { new: true};
    try{
        const product =  await Product.findByIdAndUpdate(condition, doc, option);
        res.json(product)
    } catch(error) {
        res.status(400).json({
            message:"k tim thay san pham"
        })
    }
}
//     res.json(products.map(item => item.id == req.params.id ? req.body : item))
// 