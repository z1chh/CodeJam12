const express = require("express");
const mongoose = require("mongoose");

// Initialize express
const app = express();

// Connect to MongoDB
const dbUri = "mongodb+srv://<username>:<password>@penguins.uqphgd2.mongodb.net/Penguins?retryWrites=true&w=majority";
mongoose.connect(dbUri, {useNewUrlParse: true, useUnifiedTopology: true})
.then((res) => app.listen(PORT, () => console.log(`Server started on ${PORT}.`)))
.catch(console.log(err));


// Register view engine
app.set("view engine", "ejs");

// Set default port
const PORT = process.env.PORT || 5000;

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));
