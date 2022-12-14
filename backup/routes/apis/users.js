const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const users = require('../../Tables/Users');

// Get all users
router.get('/', (req, res) => res.json(users));

// Get single user
router.get('/:id', (req, res) =>
{
    const found = users.some(user => user.id === parseInt(req.params.id));

    if (found)
    {
        res.json(users.filter(user => user.id === parseInt(req.params.id)));
    }
    else
    {
        res.status(400).json({msg: `Error: no user with ID ${req.params.id}`})
    }
});

// Create user
router.post('/', (req, res) =>
{
    // Check if user type is valid
    const client_type = req.body.client_type;
    if (!client_type)
    {
        return res.status(400).json({msg: `Error: must include client type`});
    }
    else if (client_type != "carrier" && client_type != "shipper")
    {
        return res.status(400).json({msg: `Error: client type must be 'carrier' or 'shipper'`});
    }

    // Create user
    const newUser = 
    {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        is_shipper: req.body.client_type == "shipper"? true: false
    }

    if (!newUser.name || !newUser.email)
    {
        return res.status(400).json({msg: `Error: must include name and email`});
    }
    else
    {
        users.push(newUser);
        res.json(users); // FOR POSTMAN
        // res.redirect('/'); // FOR FORM (USING WEBPAGE)
    }
});

// Update member
router.put('/:id', (req, res) =>
{
    const found = users.some(user => user.id === parseInt(req.params.id));

    if (found)
    {
        const toUpdate = req.body;
        users.forEach(user =>
        {
            if (user.id === parseInt(req.params.id))
            {
                user.name = toUpdate.name ? toUpdate.name: user.name;
                user.email = toUpdate.email ? toUpdate.email: user.email;

                res.json({msg: `User ${user.name} updated`, user: user});
            }
        });
    }
    else
    {
        res.status(400).json({msg: `Error: no user with ID ${req.params.id}`})
    }
});

// Delete user
router.delete('/:id', (req, res) =>
{
    const found = users.some(user => user.id === parseInt(req.params.id));

    if (found)
    {
        for (let i = 0; i < users.length; i++)
        {
            if (users[i].id === parseInt(req.params.id))
            {
                const toDelete = users[i];
                users.splice(i, 1);
                res.json({msg: `Member ${toDelete.name} deleted`, users: users});
            }
        }
    }
    else
    {
        res.status(400).json({msg: `Error: no user with ID ${req.params.id}`})
    }
});

module.exports = router;
