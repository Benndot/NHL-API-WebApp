// Making a basic web app to practice my skills
// 'npm run appTracker' to track and reload the web app as we save and make changes

const { urlencoded } = require('express');
const express = require('express');
const app = express();

console.log("Primary Server Online"); // Just a greeting message, can be used for debugging

// app.use(logger); // Setting the logger function defined near the bottom of this file to run up here

app.use(express.static('public'))  // Showing the javascript the path to our folder of static webpages that can be loaded/navigated to

app.use(urlencoded({ extended: true}))  // This is what we need to use body variables defined in html/ejs (see new.ejs 'firstName')
app.use(express.json())  // Allows for the parsing of json files from the html/ejs/whatever webpage rendering engine

app.set('views', './views');  // Setting the directory where the viewing media is kept. Not actually necessary here, because 'views' is ejs' default folder location name
app.set('view engine', 'ejs');  // Setting up the viewing engine itself (installed package ejs + ejs language support extension)

let port_number = 3000;

app.get('/', (request, response, next) => {
    console.log('Somebody connected...');  // This is what's logged on the developer's console
    response.status(500).send(`Hello there, thank u for making contact on port ${port_number}`); // This is what is received by the person contacting the page

});

app.get('/site', (request, response, next) => {
    response.render('main_page', {number: 4, message: "My favourite bird is a: ", bird: "Seagull"});
});


// This is where we import the routes folder and set up the server to detect the commands defined inside the users.js file
const userRouter = require('./routes/chairs');
app.use('/chairs', userRouter);

// This is an example of MIDDLEWARE. Its use must be triggered elsewhere (see usage above)
function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
};

app.listen(port_number);