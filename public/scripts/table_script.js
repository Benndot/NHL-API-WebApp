console.log("Hello to anyone weird enough to be reading the console! This is the first table script!")

// ------------------------------------------------------------------------------------------------
// This file's scripts are for the purpose of creating a new table from scratch, and it's constituent content, and applying it to the page

const pageHead = document.head

const styleLink = document.createElement('link')
styleLink.rel = "stylesheet"
styleLink.href = "/styles/table_style.css"

pageHead.appendChild(styleLink)

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
    idenData.className = "table-column"
    let idenButton = document.createElement('button')
    idenButton.className = 'id-button'
    idenButton.textContent = x.idNum

    idenData.appendChild(idenButton)

    insertionRow.appendChild(fNameData)
    insertionRow.appendChild(lNameData)
    insertionRow.appendChild(posData)
    insertionRow.appendChild(idenData)

    newTable.append(insertionRow)
})