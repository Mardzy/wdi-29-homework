const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/starter-code';
const port = process.env.PORT || 3000;

module.exports = { dbURI, port };
