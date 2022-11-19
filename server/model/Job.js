import mongoose from "mongoose";
const {Schema} = mongoose;

const jobSchema = new Schema(
{
    start_location:
    {
        type: String,
        required: false,
        unique: false
    },
    end_location:
    {
    type: String,
    required: false,
    unique: false
    },
    posted_date:
    {
    type: Date,
    required: false,
    unique: false
    },
    expected_delivery_date:
    {
    type: Date,
    required: false,
    unique: false
    },
    rate:
    {
    type: Number,
    required: true,
    unique: false
    },
},
{timestamps: true}
)
const Job = mongoose.model('Job', jobSchema);

export default Job;
