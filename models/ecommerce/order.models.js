import mongoose from 'mongoose'

const orderItemSchema = new mongoose.Schema({
  productId:{
    type : mongoose.Schema.Types.ObjectId,
    ref: "Product"
  },
  Quantity:{
    type: Number,
    required: true
  } 
})

const orederSchema = new mongoose.Schema({
  orderPrice:{
    type: Number,
    required: true
  },
  customer:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  orederItems:{
    type: [orderItemSchema]
  },
  address: {
    type: String,
    required: true
  },
  status:{
    type: String,
    enum: ["pending" , "cancelled" , "delierered"],
    default: "pending"
  }
},{timestamps:true})


export const Order = mongoose.model('Order',orederSchema);