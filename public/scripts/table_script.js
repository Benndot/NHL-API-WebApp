console.log("Hello to anyone weird enough to be reading the console! This is the first table script!")

// ------------------------------------------------------------------------------------------------
// This file's scripts are for the purpose of creating a new table from scratch, and it's constituent content, and applying it to the page

// Defining the existing page body
const pageBody = document.body

// Establishing the new table that we are going to be filling, giving it an ID
const newTable = document.createElement('table')
newTable.id = "main_table" // Should be changed, so that two tables don't share the same ID (bad practice)

// The row that will contain the headers
const headerRow = document.createElement('tr')

// Creating the individual headers
const headerOne = document.createElement('th')
headerOne.textContent = 'First Name'
headerOne.className = "table-column"

const headerTwo = document.createElement('th')
headerTwo.textContent = 'Last Name'
headerTwo.className = "table-column"

const headerThree = document.createElement('th')
headerThree.textContent = 'Position'
headerThree.className = "table-column"

const headerFour = document.createElement('th')
headerFour.textContent = 'Database ID'
headerFour.className = "table-column"

// Appending these newly created headers to the header row
headerRow.appendChild(headerOne)
headerRow.appendChild(headerTwo)
headerRow.appendChild(headerThree)
headerRow.appendChild(headerFour)

// Appending the header row to the table, and then the table to the page's body
newTable.appendChild(headerRow)
pageBody.appendChild(newTable)

// ------------------------------------------------------------------------------------------------

// Example data to be added 
hockeyData = [{firstName: "Jim", lastName: "Smith", position: "L", idNum: 1234567,}, {firstName: "Barry", lastName: "Sheers", position: "G", idNum: 9143251,},
{firstName: "Nate", lastName: "Johnson", position: "D", idNum: 7248421,}, {firstName: "Larry", lastName: "Kramer", position: "C", idNum: 8993362,}]

// Applying that data to the new table
hockeyData.forEach((x) => {
    console.log(x.firstName)

    // Here we replace the existing row with the data we want to add / or add a whole new table in the process
    let insertionRow = document.createElement('tr')

    let fNameData = document.createElement('td')
    fNameData.textContent = x.firstName
    fNameData.className = "table-column"

    let lNameData = document.createElement('td')
    lNameData.textContent = x.lastName
    lNameData.className = "table-column"

    let posData = document.createElement('td')
    posData.textContent = x.position
    posData.className = "table-column"

    let idenData = document.createElement('td')
    idenData.textContent = x.idNum
    idenData.className = "table-column"

    insertionRow.appendChild(fNameData)
    insertionRow.appendChild(lNameData)
    insertionRow.appendChild(posData)
    insertionRow.appendChild(idenData)

    newTable.append(insertionRow)
})

// ------------------------------------------------------------------------------------------------

// Using a while loop to apply some pre-set data (outdated example, but has some interesting ideas to keep in mind)
let childCounter = 2 // starting value for the data rows we want to change 

while (childCounter < 7) {
    
    // Establishing the row to be selected from  
    let rowText = `tr:nth-child(${childCounter})`
    let variableRow = document.querySelector(rowText)
    console.log(variableRow.outerText) // Just for debugging, displaying values

    // Here we replace the existing row with the data we want to add / or add a whole new table in the process
    let insertionRow = document.createElement('tr')

    let fNameData = document.createElement('td')
    fNameData.textContent = 'Ben'
    fNameData.className = "table-column"

    let lNameData = document.createElement('td')
    lNameData.textContent = 'Kiraly'
    lNameData.className = "table-column"

    let posData = document.createElement('td')
    posData.textContent = 'D'
    posData.className = "table-column"

    let idenData = document.createElement('td')
    idenData.textContent = '1476521'
    idenData.className = "table-column"

    insertionRow.appendChild(fNameData)
    insertionRow.appendChild(lNameData)
    insertionRow.appendChild(posData)
    insertionRow.appendChild(idenData)

    newTable.append(insertionRow)
    
    childCounter += 1 // Keeping the while loop progressing
}
