const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const morgan = require('morgan');
const User = require("./server/model/User");
const Job = require("./server/model/Job");

// Initialize express
const app = express();

// Connect to MongoDB
const dbUri = "mongodb+srv://admin:penguin@penguins.uqphgd2.mongodb.net/Penguins?retryWrites=true&w=majority";
mongoose.connect(dbUri) //, {useNewUrlParse: true, useUnifiedTopology: true})
.then((res) => app.listen(PORT, () => console.log(`Server started on ${PORT}.`)))
.catch((err) => console.log(err));


// Register view engine
app.set("view engine", "ejs");

// Set default port
const PORT = process.env.PORT || 5000;

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));

// API Routes
// app.use('/api/users', require('./routes/api/users.js'))
// app.use('/api/jobs', require('./routes/api/jobs.js'))
app.get("/", (req, res) =>
{
    res.redirect("/jobs");
});

app.get("/jobs", (req, res) =>
{
    // TODO
    Job.find()
    .then((result) =>
    {
        res.render("index",
        {
            title: "All Jobs",
            jobs: result
        });
    })
    .catch((err) =>
    {
        console.log(err);
    });
});

// mongoose and mongo sandbox routes
app.get("/create-user", (req, res) =>
{
    const user = new User(
        {
            name: "Adriel",
            email: "kalberto2@gmail.com",
            password: "spenguin",
            is_broker: true
        }
    );

    user.save()
    .then((result) =>
    {
        res.send(result);
    })
    .catch((err) =>
    {
        console.log(err);
    });
});

app.get("/all-users", (req, res) =>
{
    User.find()
    .then((result) =>
    {
        res.send(result);
    })
    .catch((err) =>
    {
        console.log(err);
    });
});

app.get("/single-user", (req, res) =>
{
    User.findById("63792e648c41325d07f6d1ed")
    .then((result) =>
    {
        res.send(result);
    })
    .catch((err) =>
    console.log(err));
});
