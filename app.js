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

// mongoose and mongo sandbox routes
app.get("/create-user", (req, res) =>
{
    const user = new User(
        {
            name: "Alberto",
            email: "kalberto@gmail.com",
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
