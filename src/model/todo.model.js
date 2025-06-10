import { Schema } from "mongoose";

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
  }
},{
  timestamps: true
})

export const Todo = model('Todo', todoSchema);