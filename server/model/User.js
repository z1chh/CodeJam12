import mongoose from "mongoose";
const {Schema} = mongoose;

const userSchema = new Schema(
{
  email:
  {
    type: String,
    required: true,
    unique: true
  },
  name:
  {
    type: String,
    required: true,
    unique: false
  },
  password:
  {
    type: String,
    required: true,
    unique: false
  },
  location:
  {
    type: String,
    required: true,
    unique: false
  },
  interest:
  {
    type: [String],
    required: true,
    unique: false
  }
})
const User = mongoose.model('User', userSchema);

export default User;
