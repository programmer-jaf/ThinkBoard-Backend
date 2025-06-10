import { model, Schema } from "mongoose";

const userSchema = new Schema({
  first_name:{
    type:String,
    required:true,
    trim:true,
  },
  last_name:{
    type:String,
    required:true,
    trim:true,
  },
  email:{
    type:String,
    required:true,
    trim:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
    trim:true,
  },
  todo:[
    {
      type:Schema.Types.ObjectId,
      ref:'Todo'
    }
  ]
},{
  timestamps:true
});

// create a model
export const User = model('User', userSchema);