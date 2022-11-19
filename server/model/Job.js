import mongoose from "mongoose";
const {Schema} = mongoose;

const jobSchema = new Schema(
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
  rate:
  {
    type: Number,
    required: true,
    unique: false
  },
})
const Job = mongoose.model('Job', jobSchema);

export default Job;
