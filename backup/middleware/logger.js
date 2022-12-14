// Logger file
const moment = require('moment');

// Create middleware => res unused
const logger = (req, res, next) =>
{
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
}

// Export
module.exports = logger;
