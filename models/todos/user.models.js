import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  // username :String,
  // email:String,
  // isActive: Boolean
  username : {
    type:String,
    required: true,
    unique: true,
    lowercase: true
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase: true
  },
  password:{
    type:String,
    required:[true , "password must required!"],
  
  },
},
{
  timestamps:true,
})

//kaya model banau or kisk base pe model banau
//User -> mongoDB me -> users ho jayega ( plural hoga or sare lowercase me ho jayega )
export const User = mongoose.model('User',userSchema);