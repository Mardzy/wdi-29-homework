const port = process.env.PORT || 4000;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/criminals';

module.exports = { port, dbURI };
