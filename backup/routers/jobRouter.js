import express from "express";
const router = express.Router();

import Job from "../model/Job.js";
import { ObjectId } from "mongodb";

router.post("/createJob", async (req, res) => {
  try {
    const { job } = req.body;
    console.log("Post APi CAlled ", req.body);
    const newJob = await Job.create({
      username: job.username,
      shipper: job.shipper,
      carrier: job.carrier,
      start_location: job.start_location,
      end_location: job.end_location,
      expected_delivery_date: job.expected_delivery_date || undefined,
      rate: job.rate,
      load_weight: job.load_weight,
      createdAt: Date.now(),
    });
    res.status(200).json({
      success: !!newJob,
      job: newJob,
    });
  } catch (e) {
    console.log(e);
    res.status(400).json(e.message);
  }
});

router.get("/get/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const objectId = new ObjectId(id);

    const job = await Job.findOne({ _id: objectId });
    res.status(200).json({ job: job });
  } catch (e) {
    console.log(e);
    res.status(400).json(e.message);
  }
});

export default router;