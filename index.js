// Basic Express Program

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

// Initialize express
const app = express();

// Initialize middleware
app.use(logger);

// Handlebars middleware
app.engine('handlebars', exphbs.engine()); // app.engine('handlebars', exphbs({defaultLayout: 'main'});
app.set('view engine', 'handlebars');

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Homepage Route
app.get('/', (req, res) => res.render('index',
{
    title: "Member App",
    members: members
}));

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// Set default port
const PORT = process.env.PORT || 5000 ;

// Listen on a port
app.listen(PORT, () => console.log(`Server started on ${PORT}.`));

// Members API Routes
app.use('/api/members', require('./routes/api/members.js'))