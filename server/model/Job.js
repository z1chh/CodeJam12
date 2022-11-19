import mongoose from "mongoose";
const {Schema} = mongoose;

const jobSchema = new Schema(
{
    shipper:
    {
        type: mongoose.Schema.Types.ObjectId, ref: 'Shipper',
        required: true,
        unique: false
    },
    carrier:
    {
        type: mongoose.Schema.Types.ObjectId, ref: 'Carrier',
        required: false,
        unique: false
    },
    start_location:
    {
        type: String,
        required: true,
        unique: false
    },
    end_location:
    {
    type: String,
    required: true,
    unique: false
    },
    posted_date:
    {
    type: Date,
    required: true,
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
    load_weight:
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
