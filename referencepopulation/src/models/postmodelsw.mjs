import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    name : String,
    price:Number,
    /// this author feild will use in populate
    author:{
        type : mongoose.Types.ObjectId,
        required: true,
        ref : "Author"
    }
},{timestamps:true});


export default mongoose.model('Post',postSchema);