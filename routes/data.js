// Will contain the routes to pages directly pertaining to the fetching of various kinds of data from the NHL's API

// Reminder: On a route, each address contains the route specification, so all addresses to the get requests here
// have an implied /data before them. Ex: To reach the "hockey" page in this route, you must input /data/hockey

const { response } = require('express');
const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// GET

router.get('/', (request, response) => {
    response.sendFile("player_name_search.html", {root: "public/static/"});
});

router.get('/roster', (request, response) => {
    response.sendFile("roster_search.html", {root: "public/static/"});
});

router.get('/teams', (request, response) => {
    response.sendFile("teams_franchises.html", {root: "public/static/"});
});

router.get('/table', (req, res) => {
    res.render("player_search_template.ejs")
})

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// POST 

// Player search route
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

    // Getting the first player in the list's data, or returning an undefined message to the console otherwise
    if (hockeyData.suggestions[0] == undefined) {
        console.log("Data is undefined")
    } 
    else {
        let dataTextArray = [] // An empty string within which all the data to be sent to the response page will be added
        hockeyDataArray.forEach((dataString) => {
            let playerDataSplitString = dataString.split("|")
            let playerResponseEntry = `First Name: ${playerDataSplitString[2]},\nLast Name: ${playerDataSplitString[1]},` +
            `\nPosition: ${playerDataSplitString[12]}\nDatabase ID Num. ${playerDataSplitString[0]}\n` +
            `---------------------------------------------------------------------------------------------------------------------------------------\n`
            dataTextArray.push(playerResponseEntry)
        })

        // console.log(dataTextArray)

        let responseLength = hockeyDataArray.length
        let resultsHeader = `The NHL API player search has returned ${responseLength} entries`

        console.log(resultsHeader)
    
        res.render('hockey_data', {dataResults: dataTextArray, pageHeader: resultsHeader})
    }
})

// Returns a list of all active, currently existant NHL teams
router.post('/teams', async (req, res) => {
    
    let urlString = `https://statsapi.web.nhl.com/api/v1/teams/`
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

    let firstTeamResult = hockeyData.teams[0]

    let teamDataResults = hockeyData.teams

    // Array that will contain all the formatted strings of data to be sent back to the user
    let teamsDataArray = []

    teamDataResults.forEach((entry) => {
        let entryDataString = `Name: ${entry.name}, City: ${entry.venue.city}, Arena: ${entry.venue.name}, `
        + `Franchise Founding Season: ${entry.firstYearOfPlay}, Team ID: ${entry.id}, Franchise ID: ${entry.franchiseId}`
        + `\n-------------------------------------------------------------------------------------------------------------------------------------------\n`
        teamsDataArray.push(entryDataString)
    })
    
    // Creating a list of possible data parameters to show the user what other information they could additionally get
    let teamDataCategories = []
    let teamDataCategoriesCounter = 0
    for (const ele in firstTeamResult) {
        teamDataCategories.push(ele)
        teamDataCategoriesCounter += 1
        if (teamDataCategoriesCounter > 5) {
            teamDataCategories.push("\n")
            teamDataCategoriesCounter = 0
        }
    }

    let resultsHeader = `Full list of NHL Teams and some associated data`

    let additionalInfo = `Full List of Team Data Categories\n`+teamDataCategories

    res.render('hockey_data', {dataResults: teamsDataArray, pageHeader: resultsHeader, addInfo: additionalInfo})
})

// Return a list of NHL franchises and associated information
router.post('/franchises', async (req, res) => {
    
    let urlString = `https://statsapi.web.nhl.com/api/v1/franchises/`
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

    console.log(hockeyData)
})

// Searching for the current rosters of teams
router.post('/roster_search', async (req, res) => {
    
    teamIndex = req.body.inputNum
    
    let urlString = `https://statsapi.web.nhl.com/api/v1/teams/${teamIndex}/roster`
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

    if (hockeyData.message == "Object not found") {
        console.log(`The ID value of ${teamIndex} does not correspond to an existing NHL team. No data has been returned`)
        res.send(`The ID value of ${teamIndex} does not correspond to an existing NHL team. No data has been returned`)
    } 
    else {
        let rosterEntryArray = []

        let rosterDataArray = hockeyData.roster

        rosterDataArray.forEach((dataObj) => {
            let playerEntryString = `Name: ${dataObj.person.fullName}, Position: ${dataObj.position.name}, ` +
        `Jersey Number: ${dataObj.jerseyNumber}, Database ID: ${dataObj.person.id}\n` +
        `-----------------------------------------------------------------------------------------------------\n`
        
            rosterEntryArray.push(playerEntryString)
        })

        let resultsHeader = `The NHL API returned this roster data for NHL Team with ID ${teamIndex}`

        res.render('hockey_data', {dataResults: rosterEntryArray, pageHeader: resultsHeader})
    }
    
})

module.exports = router