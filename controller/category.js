import Category from "../models/category"
import Product from "../models/Product";

export const create = async (req, res) => {
    try {
        const category = await new Category(req.body).save()
        res.json(category);
    } catch (error) {
        res.status(400).json({error})
    }
}
export const read = async ( req, res) => {
    const condition = {_id: req.params.id}
    try {
        const category = await Category.findOne(condition).exec();
        const products = await Product.find({category}).select("-category").exec();
        res.json({
            category,
            products
        })
    } catch (error) {
        
    }
}
export const list = async ( req, res) => {
    try {
        const categories = await Category.find().exec();
        res.json(categories)
    } catch (error) {
        
    }
}
export const remove = async (req, res) => {
    const condition = {_id: req.params.id};
    try{
        const category = await Category.findOneAndRemove(condition).exec()
        res.json(category)
    }catch(error) {
        res.status(400).json({
            message: "k tim thay"
        })
    }
}
export const update = async (req, res) => {
    const condition = {_id: req.params.id}
    const doc = req.body
    const option = {new:true}
    try{
        const category = await Category.findByIdAndUpdate(condition,doc,option).exec()
        res.json(category)
    }catch(error) {
        res.status(400).json({
            message: "k tim thay san pham"
        })
    }
}