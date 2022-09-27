// alert("This is the data table script file") // Alerts work, since these are served as frontend files through the browser
console.log("Hello to anyone weird enough to be reading the console!")

let fakeIDlist = [4355455, 4343256, 7575754, 1534643, 9934531]
let childCounter = 2 // starting value for the data rows we want to change 

const mainTable = document.querySelector('#main_table')
const firstRow = document.querySelector('tr')
const altRow = document.querySelector('tr:nth-child(2)')
const altRow2 = document.querySelector('tr:nth-child(3)')

// console.log(mainTable.children)
// console.log(mainTable.children[1])
// console.log(altRow.outerText)
// console.log(altRow2)

// ------------------------------------------------------------------------------------------------
// Creating a new table from scratch, and it's constituent content, and applying it to the page

// node.insertBefore() is another method of insertion that I have not yet tried
// node.replaceChild(newEle, oldEle)

// Defining the existing page body
const pageBody = document.body

// Establishing the new table that we are going to be filling, giving it an ID
const newTable = document.createElement('table')
newTable.id = "main_table" // Should be changed, so that two tables don't share the same ID (bad practice)

// The row that will contain the headers
const headerRow = document.createElement('tr')

// The individual headers
const headerOne = document.createElement('th')
headerOne.textContent = 'First Name'

const headerTwo = document.createElement('th')
headerTwo.textContent = 'Last Name'

const headerThree = document.createElement('th')
headerThree.textContent = 'Position'

const headerFour = document.createElement('th')
headerFour.textContent = 'Database ID'

headerRow.appendChild(headerOne)
headerRow.appendChild(headerTwo)
headerRow.appendChild(headerThree)
headerRow.appendChild(headerFour)

newTable.appendChild(headerRow)

pageBody.appendChild(newTable)

// ------------------------------------------------------------------------------------------------

while (childCounter < 5) {
    
    // Establishing the row to be selected from  
    let rowText = `tr:nth-child(${childCounter})`
    let variableRow = document.querySelector(rowText)
    console.log(variableRow.outerText) // Just for debugging, displaying values

    // Here we replace the existing row with the data we want to add / or add a whole new table in the process
    let insertionRow = document.createElement('tr')

    let fNameData = document.createElement('td')
    fNameData.textContent = 'Ben'

    let lNameData = document.createElement('td')
    lNameData.textContent = 'Kiraly'

    let posData = document.createElement('td')
    posData.textContent = 'D'

    let idenData = document.createElement('td')
    idenData.textContent = '1476521'

    insertionRow.appendChild(fNameData)
    insertionRow.appendChild(lNameData)
    insertionRow.appendChild(posData)
    insertionRow.appendChild(idenData)

    newTable.append(insertionRow)
    
    childCounter += 1 // Keeping the while loop progressing
}
