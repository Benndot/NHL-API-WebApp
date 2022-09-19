// Making a basic web app to practice my skills
// 'npm run appTracker' to track and reload the web app as we save and make changes

const { urlencoded, response } = require('express');
const express = require('express');
const app = express();

console.log("Primary Server Online"); // Just a greeting message, can be used for debugging

// app.use(logger); // Setting the logger function defined near the bottom of this file to run up here

let staticOptions = {
    dotfiles: "ignore", //allow, deny, ignore
    etag: true,
    extensions: ["htm", "html"],
    index: false, //to disable directory indexing
    maxAge: "7d",
    redirect: false,
    setHeaders: function(res, path, stat) {
      //add this header to all static responses
      res.set("x-timestamp", Date.now());
    }
  };

// This allows express methods to access static resources (photos, css, html files, etc) and allows sent html files to locate their stylepage links
app.use(express.static('public', staticOptions)) 

app.use(urlencoded({ extended: true}))  // This is what we need to use body variables defined in html/ejs (see new.ejs 'firstName')
app.use(express.json())  // Allows for the parsing of json files from the html/ejs/whatever webpage rendering engine

app.set('views', './views');  // Setting the directory where the viewing media is kept. Not actually necessary here, because 'views' is ejs' default folder location name
app.set('view engine', 'ejs');  // Setting up the viewing engine itself (installed package ejs + ejs language support extension)

let port_number = 3001;

app.get('/', (request, response, next) => {
    response.sendFile("index.html", {root: "public/static/"});
});

app.get('/check', (request, response, next) => {
    console.log('Somebody has connected to our server...');
    response.status(500).send(`Hello there, thank you for making contact on port ${port_number}!`); // This is what is received by the person contacting the page

});

app.post('/', (req, res) => {
    let nameObject = {firstName: req.body.firstName || 'Bob', lastName: req.body.lastName || 'Smith', userBirth: req.body.userBirth || '0/0/0'};
    console.log(`You've reached POST of input_submit.ejs. Data retrieved: (${nameObject.firstName}, ${nameObject.lastName}, ${nameObject.userBirth})`);
    res.render("user_form", {nom: nameObject.lastName, prenom: nameObject.firstName})
})

// This is the function to render static html in Express. Adapt it and use it for one of your own pages
// app.get('/', function(request, response){
//     response.sendFile('absolutePathToYour/htmlPage.html');
// });

const userRouter = require('./routes/data')
app.use('/data', userRouter)

// This is an example of MIDDLEWARE. Its use must be triggered elsewhere (see usage above, on line 10)
function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
};

app.listen(port_number);