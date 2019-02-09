const fs = require('fs')
const path = require('path')

const proccessData = require('./proccessData.js')
const createPdf = require('./createPdf.js')

const dataFile = path.join(
  __dirname, '../..', 'src', 'data', 'cv', 'data.json'
)
const data = proccessData()

// Write to JSON
fs.writeFileSync(dataFile, JSON.stringify(data))
// Write to PDF
createPdf(data)

console.log('CV regenerated 🎉')
