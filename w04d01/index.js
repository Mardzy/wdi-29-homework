
//storing the express module into a variable called express
const express = require('express');

//creating an express app which will allow us to
//configure some HTTP handlers
const app = express();

//modify Express settings
//morgan is for logging requests to the terminal
//storing morgan module into `morgan` variable to use later
const morgan = require('morgan');
const expressLayouts = require('express-ejs-layouts');
//tell express to use ejs for templating
app.set('view engine', 'ejs');
// ejs to look for the templates in the `views` folder
app.set('views', `${__dirname}/views`);

//add some middleware
//tell express to use morgan
//tell morgan to use `dev` settings
app.use(morgan('dev'));

app.use(expressLayouts);
//tell express to look for static files in the `public` folder
//ie. CSS, front end js, images, sounds etc.
app.use(express.static(`${__dirname}/public`));

//request handlers
app.get('/',(req, res)=> {
  return res.render('index');
});

app.get('/project',(req, res)=> {
  return res.render('project');
});

app.get('/project2',(req, res)=> {
  return res.render('project2');
});

app.get('/*',(req, res)=> {
  return res.render('404');
});

//tell express to listen for HTTP traffic on a specific port number
app.listen(3000, () => console.log('express is listening'));
