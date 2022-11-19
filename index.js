// Basic Express Program

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const users = require('./Users');

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
    users: users
}));

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// Set default port
const PORT = process.env.PORT || 5000 ;

// Listen on a port
app.listen(PORT, () => console.log(`Server started on ${PORT}.`));

// Users API Routes
app.use('/api/users', require('./routes/api/users.js'))