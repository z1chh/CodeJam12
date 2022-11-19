const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const User = require("../../server/model/User");
const app = express();

app.post("/users", (req, res) =>
{
    console.log(req.body);
    if (!req.body.username)
    {
        res.status(400).json({msg: `Error: must input username`});
    }
    else if (!req.body.email)
    {
        res.status(400).json({msg: `Error: must input email`});
    }
    else if (!req.body.password1)
    {
        res.status(400).json({msg: `Error: must input password`});
    }
    else if (!req.body.password2)
    {
        res.status(400).json({msg: `Error: must input confirm password`});
    }
    else if (req.body.password1 !== req.body.password2)
    {
        res.status(400).json({msg: `Error: passwords do not match`});
    }
    const user = new User(
        {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password1,
            is_broker: true
        }
    );
    user.save()
    .then((result) =>
    {
        res.redirect("/users");
    })
    .catch((err) =>
    {
        console.log(err);
    });
});
