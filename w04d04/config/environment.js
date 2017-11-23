const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/streetart';
const port = process.env.PORT || 3000;

module.exports = { dbURI, port };
