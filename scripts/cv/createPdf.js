const pdfmake = require('pdfmake')
const fontBuilder = require('pdfmake/build/vfs_fonts.js')
const fs = require('fs')
const path = require('path')

const rootPath = path.join(__dirname, '../..')
const srcPath = path.join(rootPath, 'src')

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
  const pdfFile = path.join(srcPath, 'pdfs', `${filename}.pdf`)

  doc.pipe(fs.createWriteStream(pdfFile))
  doc.end()
}
