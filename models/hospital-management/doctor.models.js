import mongoose from 'mongoose'
import { Hospital } from './hospital.models';
const doctorSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  salary:{
    type:String,
    required:true
  },
  qualification:{
    type:String,
    required:true
  },
  experienceInYears:{
    type:String,
    default: 0
  },
  worksInHospital:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Hospital"
    },
  ]
},{timestamps:true})

export const Doctor = mongoose.model("Doctor",doctorSchema);