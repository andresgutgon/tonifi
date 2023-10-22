const pdfmake = require('pdfmake')
const fontBuilder = require('pdfmake/build/vfs_fonts.js')
const fs = require('fs')
const path = require('path')

const ROOT_PATH = path.join(__dirname, '../..')
const BASE_PATH = path.join(ROOT_PATH, 'src')

const WEIGHTS = {
  normal: 'Regular',
  bold: 'Medium',
  italic: 'Italic',
}

function buildFont() {
  return ['normal', 'bold', 'italic'].reduce((memo, weight) => {
    memo[weight] = Buffer.from(
      fontBuilder.pdfMake.vfs[`Roboto-${WEIGHTS[weight]}.ttf`],
      'base64'
    )
    return memo
  }, {})
}

module.exports = function createPdf({ content, filename }) {
  const maker = new pdfmake({ Roboto: buildFont() })
  const doc = maker.createPdfKitDocument(content)
  const pdfFile = path.join(BASE_PATH, 'pdfs', `${filename}.pdf`)

  doc.pipe(fs.createWriteStream(pdfFile))
  doc.end()
}
