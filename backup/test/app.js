// Basic Express Program

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('../src/Load-In_Road/src/middleware/logger');
const users = require('./Tables/Users');
const jobs = require('./Tables/Jobs');

// Initialize express
const app = express();

// Initialize middleware
// app.use(logger); // Comment out, we don't actually need this anymore

// Handlebars middleware
app.engine('handlebars', exphbs.engine()); // app.engine('handlebars', exphbs({defaultLayout: 'main'});
app.set('view engine', 'handlebars');

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Homepage Route
app.get('/', (req, res) => res.render('index',
{
    title: "User App",
    users: users,
    jobs: jobs
}));

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// Set default port
const PORT = process.env.PORT || 5000;

// Listen on a port
app.listen(PORT, () => console.log(`Server started on ${PORT}.`));

// API Routes
app.use('/api/users', require('./routes/api/users.js'));
app.use('/api/jobs', require('./routes/api/jobs.js'));
