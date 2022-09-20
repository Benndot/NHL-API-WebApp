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

router.post('/player_search', async (req, res) => {
    nameQuery = req.body.nameKey
    console.log(nameQuery)
    let urlString = `https://suggest.svc.nhl.com/svc/suggest/v1/minplayers/${nameQuery}/100` // nameQuery is the API search term, 100
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

    let hockeyDataArray = hockeyData.suggestions  // An array of the results, if any such results exist
    // console.log(hockeyDataArray) 
    // console.log(typeof(hockeyDataArray[0]))

    // Getting the first player in the list's data, or returning an undefined message to the console otherwise
    if (hockeyData.suggestions[0] == undefined) {
        console.log("Data is undefined")
    } 
    else {
        let dataTextArray = [] // An empty string within which all the data to be sent to the response page will be added
        hockeyDataArray.forEach((dataString) => {
            let playerDataSplitString = dataString.split("|")
            let playerResponseEntry = `First Name: ${playerDataSplitString[2]},\nLast Name: ${playerDataSplitString[1]},\nDatabase ID Num. ${playerDataSplitString[0]}\n
            ---------------------------------------------------------------------------------------------------------------------------------------\n`
            dataTextArray.push(playerResponseEntry)
        })

        console.log(dataTextArray)

        let responseLength = hockeyDataArray.length
    
        console.log(playerDataString)
        res.render('hockey_data', {dataResults: dataTextArray, resultsLength: responseLength})
    }
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