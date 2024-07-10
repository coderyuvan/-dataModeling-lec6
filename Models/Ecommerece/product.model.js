import mongoose from 'mongoose'

const productSchema=new mongoose.Schema({

name:{
  type:String,
  required:true,   
  lowercase:true,
},

description:{
  type:String,
  required:true,
},

category:{
   type:mongoose.Schema.Types.ObjectId,
   ref:"Category",
   required:true,
},

price:{
 type:Number,
 default:0,
},

stock:{
  type:Number,
  default:0,
 },
 
 productImage:{
  type:String,
 },
 
 owner:{
  types:mongoose.Schema.Types.ObjectId,
   ref:"user",
 }

},{timestamps:true})

export const Product=mongoose.model("Product",productSchema)