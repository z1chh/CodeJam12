const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');

// Get all members
router.get('/', (req, res) => res.json(members));

// Get single member
router.get('/:id', (req, res) =>
{
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found)
    {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
    else
    {
        res.status(400).json({msg: `Error: no member with ID ${req.params.id}`})
    }
});

// Create member
router.post('/', (req, res) =>
{
    const newMember = 
    {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if (!newMember.name || !newMember.email)
    {
        return res.status(400).json({msg: `Error: must include name and email`});
    }
    else
    {
        members.push(newMember);
        res.json(members); // FOR POSTMAN
        // res.redirect('/'); // FOR FORM (USING WEBPAGE)
    }
});

// Update member
router.put('/:id', (req, res) =>
{
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found)
    {
        const toUpdate = req.body;
        members.forEach(member =>
        {
            if (member.id === parseInt(req.params.id))
            {
                member.name = toUpdate.name ? toUpdate.name: member.name;
                member.email = toUpdate.email ? toUpdate.email: member.email;

                res.json({msg: `Member ${member.name} updated`, member: member});
            }
        });
    }
    else
    {
        res.status(400).json({msg: `Error: no member with ID ${req.params.id}`})
    }
});

// Delete member
router.delete('/:id', (req, res) =>
{
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found)
    {
        for (let i = 0; i < members.length; i++)
        {
            if (members[i].id === parseInt(req.params.id))
            {
                const toDelete = members[i];
                members.splice(i, 1);
                res.json({msg: `Member ${toDelete.name} deleted`, members: members});
            }
        }
    }
    else
    {
        res.status(400).json({msg: `Error: no member with ID ${req.params.id}`})
    }
});

module.exports = router;
