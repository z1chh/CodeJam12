const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const jobs = require('../../Tables/Jobs');

// Get all jobs
router.get('/', (req, res) => res.json(jobs));

// Get single job
router.get('/:id', (req, res) =>
{
    const found = jobs.some(job => job.id === parseInt(req.params.id));

    if (found)
    {
        res.json(jobs.filter(job => job.id === parseInt(req.params.id)));
    }
    else
    {
        res.status(400).json({msg: `Error: no job with ID ${req.params.id}`})
    }
});

// Create job
router.post('/', (req, res) =>
{
    const newJob = 
    {
        id: uuid.v4(),
        broker: req.body.broker,
        trucker: null,
        rate: req.body.rate
    }

    if (!newJob.broker)
    {
    return res.status(400).json({msg: `Error: must include broker`});
    }
    else if (!newJob.rate)
    {
        return res.status(400).json({msg: `Error: must input pay rate`});
    }
    else if (newJob.rate < 1)
    {
        return res.status(400).json({msg: `Error: must input positive pay`});
    }
    else
    {
        jobs.push(newJob);
        res.json(jobs); // FOR POSTMAN
        // res.redirect('/'); // FOR FORM (USING WEBPAGE)
    }
});

// Update job
router.put('/:id', (req, res) =>
{
    const found = jobs.some(job => job.id === parseInt(req.params.id));

    if (found)
    {
        const toUpdate = req.body;
        jobs.forEach(job =>
        {
            if (job.id === parseInt(req.params.id))
            {
                job.trucker = toUpdate.trucker ? toUpdate.trucker: job.trucker;
                job.rate = toUpdate.rate ? toUpdate.rate: job.rate;

                res.json({msg: `Job from ${job.broker} updated`, job: job});
            }
        });
    }
    else
    {
        res.status(400).json({msg: `Error: no job with ID ${req.params.id}`})
    }
});

// Delete job
router.delete('/:id', (req, res) =>
{
    const found = jobs.some(job => job.id === parseInt(req.params.id));

    if (found)
    {
        for (let i = 0; i < jobs.length; i++)
        {
            if (jobs[i].id === parseInt(req.params.id))
            {
                const toDelete = job[i];
                job.splice(i, 1);
                res.json({msg: `Job from ${toDelete.broker} deleted`, jobs: jobs});
            }
        }
    }
    else
    {
        res.status(400).json({msg: `Error: no job with ID ${req.params.id}`})
    }
});

module.exports = router;
