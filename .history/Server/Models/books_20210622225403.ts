import mongoose from 'mongoose';
const Schema = mongoose.Schema; // Schema alias

// create a model class
const BookSchema = new Schema
({
    Title:String,
    Author:String,
    Description:String,
    Genre:String,
    Price:Number
    
    
},
{
  collection: "books"
});

const Model = mongoose.model('book', BookSchema);
export default Model;
