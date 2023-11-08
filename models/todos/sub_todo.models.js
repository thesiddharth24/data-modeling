import mongoose from 'mongoose'

const subTodoSchema = new mongoose.Schema({
  // username :String,
  // email:String,
  // isActive: Boolean
  content : {
    type:String,
    required: true
  },
  complete:{
    type:Boolean,
    default:false
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  
  },
},
{
  timestamps:true,
})

//kaya model banau or kisk base pe model banau
//User -> mongoDB me -> users ho jayega ( plural hoga or sare lowercase me ho jayega )
export const SubTodo = mongoose.model('SubTodo',subTodoSchema);