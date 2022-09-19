// Will contain the routes to pages directly pertaining to the fetching of various kinds of data from the NHL's API

// Reminder: On a route, each address contains the route specification, so all addresses to the get requests here
// have an implied /data before them. Ex: To reach the "hockey" page in this route, you must input /data/hockey

const { response } = require('express');
const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

router.get('/', (request, response) => {
    response.sendFile("nhl_query.html", {root: "public/static/"});
});

router.post('/', (req, res) => {
    // For the inteactivity added to the bottom bar of the friendly.ejs page
    console.log(`${req.body.fileSelect || 'No input'}, ${typeof(req.body.fileSelect)}.${req.body.inputDate || 'No input'}`)
})

router.post('/hockey', async (req, res) => {
    nameQuery = req.body.nameKey
    console.log(nameQuery)
    let urlString = `https://suggest.svc.nhl.com/svc/suggest/v1/minplayers/${nameQuery}/15`
    const options = {
        "method": "GET"
    }

    const hockeyData = await fetch(urlString, options)
    .then (res => res.json())
    .catch (err => {
        console.error({
            "message": "Something went wrong",
            error: err
        })
    })

    console.log(typeof(hockeyData.suggestions))
    console.log(hockeyData.suggestions)
    console.log(typeof(hockeyData.suggestions[0]))
    let hockeyDataArray = hockeyData.suggestions[0].split("|")
    PlayerDataObject1 = {
        "firstName": hockeyDataArray[2],
        "lastName": hockeyDataArray[1],
        "DatabaseIDnum": hockeyDataArray[0]
    }
    console.log(PlayerDataObject1)
    // res.render('hockey_data', {dataResults: hockeyData})
})

router.post('/hockey_roster', async (req, res) => {
    nameQuery = req.body.nameKey
    let urlString = `https://statsapi.web.nhl.com/api/v1/teams/1/roster`
    const options = {
        "method": "GET"
    }

    const hockeyData = await fetch(urlString, options)
    .then (res => res.json())
    .catch (err => {
        console.error({
            "message": "Something went wrong",
            error: err
        })
    })

    console.log(hockeyData.roster[0].person)
    res.send(hockeyData)
})

module.exports = router