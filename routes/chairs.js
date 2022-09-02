const { response } = require('express');
const express = require('express')
const router = express.Router()

router.get('/', (request, response, next) => {
    response.render('main_page', {number: 10, message: "My favourite bird is a: ", bird: "Ostrich"});
});

router.post('/', (req, res) => {
    let searchInput = req.body.searchQuery;
    console.log(`POST method reached, input searchQuery was "${searchInput|| 500}"`);
    res.render('search_results', {keyWord: req.body.searchQuery})  // takes the url extension, not the file extension
})

router.get('/main', (request, response, next) => {
    response.render('main_page', {number: 7, message: "My favourite bird is a: ", bird: "Pelican"});
});

router.get('/catalog', (request, response, next) => {
    response.render('search_results', {keyWord: 'general'});
});

router.get('/catalog/:id', (req, res, next) => {
    res.render('search_results', {keyWord: req.params.id}); 
    // :word means that anything can be added to the end of the URL, and then we use 'keyWord' to add that as a variable into the HTML response
});

module.exports = router