const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const User = require("../../server/model/User");

// Initialize express
const app = express();

// Set default port
const PORT = process.env.PORT || 5000 ;

// Connect to MongoDB
const dbUri = "mongodb+srv://admin:penguin@penguins.uqphgd2.mongodb.net/Penguins?retryWrites=true&w=majority";
mongoose.connect(dbUri) //, {useNewUrlParse: true, useUnifiedTopology: true})
.then((res) => app.listen(PORT, () => console.log(`Server started on ${PORT}.`)))
.catch((err) => console.log(err));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) =>
{
    res.render("src/Load-In_Road/test/index");
});

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
