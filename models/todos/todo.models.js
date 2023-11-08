import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
  // username :String,
  // email:String,
  // isActive: Boolean
  content : {
    type:String,
    required: true,

 
  },
  complete:{
    type:String,
    default:false
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User',
  
  },
  subTodos: [
    {
      type:mongoose.Schema.Types.ObjectId,
      ref: "SubTodo"
    }
  ] // Array of sub Todos
},
{
  timestamps:true,
})

//kaya model banau or kisk base pe model banau
//Todo -> mongoDB me -> todos ho jayega ( plural hoga or sare lowercase me ho jayega )
export const Todo = mongoose.model('Todo',todoSchema);