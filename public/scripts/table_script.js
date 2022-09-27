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
// Creating a new table, and it's constituent content

// node.insertBefore() is another method of insertion that I have not yet tried
// extinctList.replaceChild(newSpecies2, replacedChild)

const pageBody = document.body

const newTable = document.createElement('table')
// newTable.className = 'table-two'
newTable.id = "main_table"

const headerRow = document.createElement('tr')

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

    // Here we replace the existing row with the data we want to add / or add a whole new
    
    childCounter += 1 // Keeping the while loop progressing
}

const fakeTable = document.createElement('table')
