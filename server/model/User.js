import mongoose from "mongoose";
const {Schema} = mongoose;

const userSchema = new Schema(
{
  name:
  {
    type: String,
    required: true,
    unique: false
  },
  email:
  {
    type: String,
    required: true,
    unique: true
  },
  password:
  {
    type: String,
    required: true,
    unique: false
  },
  is_broker:
  {
    type: Boolean,
    required: true,
    unique: false
  },
},
{timestamps: true},
)
const User = mongoose.model('User', userSchema);

export default User;
