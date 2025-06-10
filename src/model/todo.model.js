import { Schema,model } from "mongoose";

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  user:{
    type:Schema.Types.ObjectId,
    ref:'User'
  }
},{
  timestamps: true
})

export const Todo = model('Todo', todoSchema);