import mongoose, {Schema, ObjectId} from "mongoose";
const bookSchema = new Schema({
    name: {
        type: String,
        minLength: 5,
        required: true,
        unque:true
    },
    img: {
        type:String,
        required:true
    },
    price: {
        type: Number,
        required: true
    },
    sale_price: {
        type: String,
    },
    description: {
        type: String
    },
    status: {
     type: Number
    },
    category: {
        type: ObjectId,
        ref: "category"
    }

},
{timestamps: true})
export default mongoose.model('book', bookSchema)